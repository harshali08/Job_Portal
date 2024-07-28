// // jobUtils.ts

// interface Job {
//     id: string;
//     position: string;
//     mainCategory: string;
//     category: string;
//     location: string;
//     company: string;
//     description: string;
//     experience: number;
//     salary: string;
//     posted: string;
//   }
  
//   export async function fetchJobs(): Promise<Job[]> {
//     try {
//       const response = await fetch("http://localhost:3000/api/jobs");
//       if (!response.ok) {
//         throw new Error(`Error fetching jobs: ${response.statusText}`);
//       }
//       const data = await response.json();
//       console.log(data); // Log the response to check its structure
//       return data.jobs; // Adjust based on your API response structure
//     } catch (error) {
//       console.error(error);
//       return []; // Return an empty array or handle errors as needed
//     }
//   }
  
//   export const countJobsByMainCategory = (jobs: Job[]): { [key: string]: number } => {
//     const categoryCounts: { [key: string]: number } = {};
  
//     jobs.forEach((job) => {
//       const mainCategory = job.mainCategory;
//       if (categoryCounts[mainCategory]) {
//         categoryCounts[mainCategory]++;
//       } else {
//         categoryCounts[mainCategory] = 1;
//       }
//     });
  
//     return categoryCounts;
//   };
  

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
interface User{
  id: string;
  userName:string;
  email:string;
  password:string;
  
}
export async function fetchJobs(): Promise<Job[]> {
  try {
      const response = await fetch("http://localhost:3000/api/jobs");
      if (!response.ok) {
          throw new Error(`Error fetching jobs: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data); // Log the response to check its structure
      return data.jobs; // Adjust based on your API response structure
  } catch (error) {
      console.error(error);
      return []; // Return an empty array or handle errors as needed
  }
}

export async function fetchUsers(): Promise<User[]> {
  try {
      const response = await fetch("http://localhost:3000/api/user");
      if (!response.ok) {
          throw new Error(`Error fetching jobs: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data); // Log the response to check its structure
      return data.users; // Adjust based on your API response structure
  } catch (error) {
      console.error(error);
      return []; // Return an empty array or handle errors as needed
  }
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

export const getTotalJobCount = (jobs: Job[]): number => {
  return jobs.length;
};

export const getTotalUserCount = (users: User[]): number => {
  return users.length;
};

  