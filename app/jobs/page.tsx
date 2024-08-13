

'use client';

import React, { useState, useEffect } from 'react';
import JobComp from "@/components/JobComp";
import Footer from '@/components/Footer';
import PaginationComp from '@/components/PaginationComp';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { countJobsByMainCategory } from '@/lib/jobUtils'; // Adjust the path accordingly

interface Job {
  id: string;
  position: string;
  mainCategory: string;
  category: string;
  location: string;
  company: string;
  description: string;
  experience: number;
  salary: string;
  posted: string;
}

const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Page: React.FC = () => {
  const [jobList, setJobList] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const resp = await fetch('http://localhost:3000/api/jobs');
        const data = await resp.json();
        const jobData: Job[] = data.jobs.map((job: Job) => ({
          ...job,
          posted: calculateDaysAgo(job.posted),
        }));

        const shuffledJobs = shuffleArray(jobData);
        setJobList(shuffledJobs);
        setFilteredJobs(shuffledJobs);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }

    fetchJobs();
  }, []);

  function calculateDaysAgo(dateString: string): string {
    const postedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysAgo === 0) {
      return 'Today';
    } else if (daysAgo === 1) {
      return '1 day ago';
    } else {
      return `${daysAgo} days ago`;
    }
  }

  const handleSearch = (searchTerm: string, filterCategory: string, filterLocation: string, filtermainCategory: string) => {
    console.log('Search term:', searchTerm);
    console.log('Category filter:', filterCategory);
    console.log('Location filter:', filterLocation);
    console.log('mainCategory filter:', filtermainCategory);

    const filtered = jobList.filter((job) => {
      const matchesSearchTerm = searchTerm === '' || 
        job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategoryFilter = filterCategory === 'All' || job.category.toLowerCase() === filterCategory.toLowerCase();
      const matchesLocationFilter = filterLocation === 'All' || job.location.toLowerCase() === filterLocation.toLowerCase();
      const matchesmainCategoryFilter = filtermainCategory === 'All' || job.mainCategory.toLowerCase() === filtermainCategory.toLowerCase();

      return matchesSearchTerm && matchesCategoryFilter && matchesLocationFilter && matchesmainCategoryFilter;
    });

    console.log('Filtered jobs:', filtered);
    setFilteredJobs(filtered);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      </div>
    );
  }

  // Use the countJobsByMainCategory function with jobList (all jobs)
  const jobCounts = countJobsByMainCategory(jobList);
  console.log('Job counts by mainCategory:', jobCounts);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className='p-2 sm:p-16'>
        {filteredJobs.length === 0 ? (
          <div className="text-center py-10 text-2xl font-semibold ">No Jobs Found..</div>
        ) : (
          <>
            {currentJobs.map((job) => (
              <Link href={`jobs/${job.id}`} key={job.id}>
                <JobComp
                  key={job.id}
                  position={job.position}
                  category={job.category}
                  location={job.location}
                  company={job.company}
                  description={job.description}
                  experience={job.experience}
                  salary={job.salary}
                  posted={job.posted}
                />
              </Link>
            ))}
            <PaginationComp
              itemsPerPage={jobsPerPage}
              totalItems={filteredJobs.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
