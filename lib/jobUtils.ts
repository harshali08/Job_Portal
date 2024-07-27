// jobUtils.ts

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
  
  export const countJobsByMainCategory = (jobs: Job[]): { [key: string]: number } => {
    const categoryCounts: { [key: string]: number } = {};
  
    jobs.forEach((job) => {
      const mainCategory = job.mainCategory;
      if (categoryCounts[mainCategory]) {
        categoryCounts[mainCategory]++;
      } else {
        categoryCounts[mainCategory] = 1;
      }
    });
  
    return categoryCounts;
  };
  