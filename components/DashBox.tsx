

"use client";
import React, { useEffect, useState } from 'react';
import { fetchJobs, fetchUsers, getTotalJobCount, getTotalUserCount } from '@/lib/jobUtils'; // Adjust the path as needed
import { Skeleton } from "@/components/ui/skeleton";

const DashBox: React.FC = () => {
  const [totalJobs, setTotalJobs] = useState<number | null>(null);
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const jobs = await fetchJobs();
        const jobCount = getTotalJobCount(jobs);
        setTotalJobs(jobCount);
        
        const users = await fetchUsers();
        const userCount = getTotalUserCount(users);
        setTotalUsers(userCount);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className='flex sm:justify-between items-center'>
      <div className="px-2 my-2">
        <div className="flex flex-wrap sm:flex-nowrap mx-4">
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg border p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <div className='flex justify-between items-center'>
                    <p className="text-sm text-muted-foreground text-blue-950 px-2">
                      Total Jobs
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business">
                      <path d="M12 12h.01"/>
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                      <rect width="20" height="14" x="2" y="6" rx="2"/>
                    </svg>
                  </div>
                  {loading ? (
                    <Skeleton className="h-8 w-100px" />
                  ) : (
                    <h1 className="font-bold text-6xl text-blue-700">+{totalJobs}</h1>
                  )}
                  {loading ? (
                    <Skeleton className="h-2 w-50" />
                  ) : (
                    <p className="text-sm text-muted-foreground px-2">Jobs updated from last month</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg border p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <div className='flex justify-between items-center'>
                    <p className="text-sm text-muted-foreground text-blue-950 px-2">
                      Total Users
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <line x1="19" x2="19" y1="8" y2="14"/>
                      <line x1="22" x2="16" y1="11" y2="11"/>
                    </svg>
                  </div>
                  {loading ? (
                    <Skeleton className="h-10 w-100px my-5" />
                  ) : (
                    <h1 className="font-bold text-6xl text-blue-700">+{totalUsers}</h1>
                  )}
                  {loading ? (
                    <div>
                    <Skeleton className="h-2  w-50px" />
                   
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground px-2">Users updated from last month</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBox;
