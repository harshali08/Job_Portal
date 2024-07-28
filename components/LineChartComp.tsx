// "use client";

// import * as React from "react";
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// // Define the type for data points
// interface DataPoint {
//   date: string;
//   count: number; // Renamed from 'updated' to 'count' for clarity
// }

// // Define chart configuration
// const chartConfig: ChartConfig = {
//   job: {
//     label: "Jobs Uploaded",
//     color: "hsl(var(--chart-1))",
//   },
//   user: {
//     label: "Users Created",
//     color: "hsl(var(--chart-2))",
//   },
// };

// // Define the type for the total values
// interface TotalValues {
//   job: number;
//   user: number;
// }

// export function LineChartComp() {
//   const [activeChart, setActiveChart] =
//     React.useState<keyof typeof chartConfig>("job");

//   const [jobData, setJobData] = React.useState<DataPoint[]>([]);
//   const [userData, setUserData] = React.useState<DataPoint[]>([]);
//   const [loading, setLoading] = React.useState<boolean>(true);

//   React.useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         console.log("Fetching job data...");
//         const response = await fetch("http://localhost:3000/api/jobs");
//         if (!response.ok) {
//           throw new Error(`Job API response error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         const aggregatedData = aggregateData(data.jobs);
//         console.log("Job data fetched and aggregated:", aggregatedData);
//         setJobData(aggregatedData);
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       }
//     };

//     const fetchUserData = async () => {
//       try {
//         console.log("Fetching user data...");
//         const response = await fetch("http://localhost:3000/api/user");
//         if (!response.ok) {
//           throw new Error(`User API response error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         const aggregatedData = aggregateData(data.users);
//         console.log("User data fetched and aggregated:", aggregatedData);
//         setUserData(aggregatedData);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchJobData();
//     fetchUserData();
    
//     setLoading(false); // Ensure loading is set to false after fetching
//   }, []);

//   // Function to generate all dates in the past month
//   const generateDateRange = () => {
//     const dates: string[] = [];
//     const today = new Date();
//     const oneMonthAgo = new Date();
//     oneMonthAgo.setDate(today.getDate() - 30);

//     for (let d = oneMonthAgo; d <= today; d.setDate(d.getDate() + 1)) {
//       dates.push(new Date(d).toLocaleDateString("en-US"));
//     }

//     return dates;
//   };

//   // Function to aggregate and filter data by the past month
//   const aggregateData = (items: any[]) => {
//     const dateCount: { [key: string]: number } = {};
//     const datesInRange = generateDateRange();

//     items.forEach(item => {
//       const date = new Date(item.posted);
//       const dateStr = date.toLocaleDateString("en-US");
//       if (datesInRange.includes(dateStr)) {
//         if (dateCount[dateStr]) {
//           dateCount[dateStr]++;
//         } else {
//           dateCount[dateStr] = 1;
//         }
//       }
//     });

//     // Ensure all dates in the range are included, even if count is 0
//     return datesInRange.map(date => ({
//       date,
//       count: dateCount[date] || 0,
//     }));
//   };

//   const total = React.useMemo<TotalValues>(() => {
//     // Select the correct data array based on the active chart
//     const data: DataPoint[] = activeChart === "job" ? jobData : userData;
    
//     // Log the selected data for debugging
//     console.log("Active chart data:", data);

//     // Ensure `data` is an array and has valid entries
//     const validData = Array.isArray(data) ? data : [];
    
//     // Calculate total values
//     const totalValues: TotalValues = {
//       job: validData.reduce((acc, curr) => acc + (curr.count || 0), 0),
//       user: validData.reduce((acc, curr) => acc + (curr.count || 0), 0),
//     };

//     console.log("Total values:", totalValues);

//     return totalValues;
//   }, [activeChart, jobData, userData]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Card>
//       <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
//         <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
//           <CardTitle>Bar Chart - Interactive</CardTitle>
//           <CardDescription>
//             Showing total jobs uploaded or users created in the past month
//           </CardDescription>
//         </div>
//         <div className="flex">
//           {(["job", "user"] as (keyof TotalValues)[]).map((key) => {
//             return (
//               <button
//                 key={key}
//                 data-active={activeChart === key}
//                 className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
//                 onClick={() => setActiveChart(key)}
//               >
//                 <span className="text-xs text-muted-foreground">
//                   {chartConfig[key].label}
//                 </span>
//                 <span className="text-lg font-bold leading-none sm:text-3xl">
//                   {(total[key] as number).toLocaleString()}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </CardHeader>
//       <CardContent className="px-2 sm:p-6">
//         <ChartContainer
//           config={chartConfig}
//           className="aspect-auto h-[250px] w-full"
//         >
//           <BarChart
//             accessibilityLayer
//             data={activeChart === "job" ? jobData : userData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="date"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               minTickGap={32}
//               tickFormatter={(value) => value}
//             />
//             <ChartTooltip
//               content={
//                 <ChartTooltipContent
//                   className="w-[150px]"
//                   nameKey={activeChart}
//                   labelFormatter={(value) => value}
//                 />
//               }
//             />
//            <Bar dataKey="count" fill="#2563eb" /> 
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Define the type for data points
interface DataPoint {
  date: string;
  count: number; // Renamed from 'updated' to 'count' for clarity
}

// Define chart configuration
const chartConfig: ChartConfig = {
  job: {
    label: "Jobs Uploaded",
    color: "hsl(var(--chart-1))",
  },
  user: {
    label: "Users Created",
    color: "hsl(var(--chart-2))",
  },
};

// Define the type for the total values
interface TotalValues {
  job: number;
  user: number;
}

export function LineChartComp() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("job");

  const [jobData, setJobData] = React.useState<DataPoint[]>([]);
  const [userData, setUserData] = React.useState<DataPoint[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchJobData = async () => {
      try {
        console.log("Fetching job data...");
        const response = await fetch("http://localhost:3000/api/jobs");
        if (!response.ok) {
          throw new Error(`Job API response error: ${response.statusText}`);
        }
        const data = await response.json();
        const aggregatedData = aggregateData(data.jobs);
        console.log("Job data fetched and aggregated:", aggregatedData);
        setJobData(aggregatedData);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        console.log("Fetching user data...");
        const response = await fetch("http://localhost:3000/api/user");
        if (!response.ok) {
          throw new Error(`User API response error: ${response.statusText}`);
        }
        const data = await response.json();
        const aggregatedData = aggregateData(data.users);
        console.log("User data fetched and aggregated:", aggregatedData);
        setUserData(aggregatedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchJobData();
    fetchUserData();
    
    setLoading(false); // Ensure loading is set to false after fetching
  }, []);

  // Function to generate all dates in the past month
  const generateDateRange = () => {
    const dates: string[] = [];
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setDate(today.getDate() - 30);

    for (let d = oneMonthAgo; d <= today; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d).toLocaleDateString("en-US"));
    }

    return dates;
  };

  // Function to aggregate and filter data by the past month
  const aggregateData = (items: any[]) => {
    const dateCount: { [key: string]: number } = {};
    const datesInRange = generateDateRange();

    items.forEach(item => {
      const date = new Date(item.posted);
      const dateStr = date.toLocaleDateString("en-US");
      if (datesInRange.includes(dateStr)) {
        if (dateCount[dateStr]) {
          dateCount[dateStr]++;
        } else {
          dateCount[dateStr] = 1;
        }
      }
    });

    // Ensure all dates in the range are included, even if count is 0
    return datesInRange.map(date => ({
      date,
      count: dateCount[date] || 0,
    }));
  };

  const total = React.useMemo<TotalValues>(() => {
    // Select the correct data array based on the active chart
    const data: DataPoint[] = activeChart === "job" ? jobData : userData;
    
    // Log the selected data for debugging
    console.log("Active chart data:", data);

    // Ensure `data` is an array and has valid entries
    const validData = Array.isArray(data) ? data : [];
    
    // Calculate total values
    const totalValues: TotalValues = {
      job: validData.reduce((acc, curr) => acc + (curr.count || 0), 0),
      user: validData.reduce((acc, curr) => acc + (curr.count || 0), 0),
    };

    console.log("Total values:", totalValues);

    return totalValues;
  }, [activeChart, jobData, userData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total jobs uploaded or users created in the past month
          </CardDescription>
        </div>
        <div className="flex">
          {(["job", "user"] as (keyof TotalValues)[]).map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {(total[key] as number).toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full" // Adjusted height
        >
          <BarChart
            accessibilityLayer
            data={activeChart === "job" ? jobData : userData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart}
                  labelFormatter={(value) => value}
                />
              }
            />
           <Bar dataKey="count" fill="#2563eb" /> 
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

