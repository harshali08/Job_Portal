// "use client"

// import { TrendingUp } from "lucide-react"
// import { LabelList, Pie, PieChart } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig

// export function RadialJobData() {
//   return (
//     <Card className="flex flex-col">
//       <CardHeader className="items-center pb-0">
//         <CardTitle>Pie Chart - Label List</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1 pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               content={<ChartTooltipContent nameKey="visitors" hideLabel />}
//             />
//             <Pie data={chartData} dataKey="visitors">
//               <LabelList
//                 dataKey="browser"
//                 className="fill-background"
//                 stroke="none"
//                 fontSize={12}
//                 formatter={(value: keyof typeof chartConfig) =>
//                   chartConfig[value]?.label
//                 }
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }

"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { countJobsByMainCategory, fetchJobs } from "@/lib/jobUtils";

// Chart Configuration
const chartConfig = {
  Finance: {
    label: "Finance",
    color: "hsl(var(--color-blue-1))", // Dark blue for Finance
  },
  HR: {
    label: "HR",
    color: "hsl(var(--color-blue-2))", // Medium blue for HR
  },
  Banking: {
    label: "Banking",
    color: "hsl(var(--color-blue-3))", // Lighter blue for Banking
  },
  Marketing: {
    label: "Marketing",
    color: "hsl(var(--color-blue-4))", // Light blue for Marketing
  },
  Sales: {
    label: "Sales",
    color: "hsl(var(--color-blue-5))", // Very light blue for Sales
  },
  Accounting: {
    label: "Accounting",
    color: "hsl(var(--color-blue-6))", // Lightest blue for Accounting
  },
  IT: {
    label: "IT",
    color: "hsl(var(--color-blue-7))", // Pale blue for IT
  },
  Designer: {
    label: "Designer",
    color: "hsl(var(--color-blue-8))", // Very pale blue for Designer
  },
  Customer_Support: {
    label: "Customer Support",
    color: "hsl(var(--color-blue-9))", // Almost white blue for Customer Support
  },
} satisfies ChartConfig;



// Get Category Color
function getCategoryColor(category: string): string {
  const colorMap: { [key: string]: string } = {
    Finance: "var(--color-blue-1)",
    HR: "var(--color-blue-2)",
    Banking: "var(--color-blue-3)",
    Marketing: "var(--color-blue-4)",
    Sales: "var(--color-blue-5)",
    Accounting: "var(--color-blue-6)",
    IT: "var(--color-blue-7)",
    Designer: "var(--color-blue-8)",
    Customer_Support: "var(--color-blue-9)",
    // Add more categories as needed
  };

  return colorMap[category] || "var(--color-default-blue)"; // Default blue color
}


export function RadialJobData() {
  const [jobData, setJobData] = React.useState<{ browser: string; visitors: number; fill: string }[]>([]);

  React.useEffect(() => {
    async function loadJobs() {
      const jobs = await fetchJobs();
      const categoryCounts = countJobsByMainCategory(jobs);
      
      const updatedChartData = Object.entries(categoryCounts).map(([category, count]) => ({
        browser: category,
        visitors: count,
        fill: getCategoryColor(category),
      }));
      setJobData(updatedChartData);
    }

    loadJobs();
  }, []);

  return (
    // <Card className="flex flex-col">
    //   <CardHeader className="items-center pb-0">
    //     <CardTitle>Pie Chart - Label List</CardTitle>
    //     <CardDescription>January - June 2024</CardDescription>
    //   </CardHeader>
    //   <CardContent className="flex-1 pb-0">
    //     <ChartContainer
    //       config={chartConfig}
    //       className="mx-auto aspect-square max-h-[250px]"
    //     >
    //       <PieChart>
    //         <ChartTooltip
    //           content={<ChartTooltipContent nameKey="visitors" hideLabel />}
    //         />
    //         <Pie data={jobData} dataKey="visitors">
    //           <LabelList
    //             dataKey="browser"
    //             className="fill-background"
    //             stroke="none"
    //             fontSize={12}
    //             formatter={(value: keyof typeof chartConfig) =>
    //               chartConfig[value]?.label
    //             }
    //           />
    //         </Pie>
    //       </PieChart>
    //     </ChartContainer>
    //   </CardContent>
    //   <CardFooter className="flex-col gap-2 text-sm">
    //     <div className="flex items-center gap-2 font-medium leading-none">
    //       Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //     </div>
    //     <div className="leading-none text-muted-foreground">
    //       Showing total visitors for the last 6 months
    //     </div>
    //   </CardFooter>
    // </Card>
    // <Card className="flex flex-col">
    //   <CardHeader className="items-center pb-0">
    //     <CardTitle>Pie Chart - Separator None</CardTitle>
    //     <CardDescription>January - June 2024</CardDescription>
    //   </CardHeader>
    //   <CardContent className="flex-1 pb-0">
    //     <ChartContainer
    //       config={chartConfig}
    //       className="mx-auto aspect-square max-h-[250px]"
    //     >
    //       <PieChart>
    //         <ChartTooltip
    //           cursor={false}
    //           content={<ChartTooltipContent hideLabel />}
    //         />
    //         <Pie
    //          data={jobData}
    //           dataKey="visitors"
    //           nameKey="browser"
    //           stroke="0"
    //         />
    //       </PieChart>
    //     </ChartContainer>
    //   </CardContent>
    //   <CardFooter className="flex-col gap-2 text-sm">
    //     <div className="flex items-center gap-2 font-medium leading-none">
    //       Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //     </div>
    //     <div className="leading-none text-muted-foreground">
    //       Showing total visitors for the last 6 months
    //     </div>
    //   </CardFooter>
    // </Card>
    <Card className="flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle>Jobs by Category</CardTitle>
      {/* <CardDescription>January - June 2024</CardDescription> */}
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie data={jobData} dataKey="visitors" label nameKey="browser" />
        </PieChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
      {/* <div className="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
      </div> */}
      <div className="leading-none text-muted-foreground">
        Showing total jobs for the last 6 months
      </div>
    </CardFooter>
  </Card>
  );
}


