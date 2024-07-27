"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Define types for the job data
interface JobData {
  category: string
  jobs: number
  fill: string
}

const chartConfig = {
  jobs: {
    label: "Jobs",
  },
  category1: {
    label: "Category 1",
    color: "hsl(var(--chart-1))",
  },
  category2: {
    label: "Category 2",
    color: "hsl(var(--chart-2))",
  },
  category3: {
    label: "Category 3",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RadialJobData() {
  const [chartData, setChartData] = React.useState<JobData[]>([]);
  const [totalJobs, setTotalJobs] = React.useState<number>(0);

  React.useEffect(() => {
    async function fetchUpdatedJobs() {
      try {
        const resp = await fetch('http://localhost:3000/api/jobs');
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const data = await resp.json();
        console.log('Fetched data:', data); // Add this line to inspect the fetched data

        // Ensure data.jobs is an array
        if (!Array.isArray(data.jobs)) {
          throw new Error('Invalid data format: jobs is not an array');
        }

        const jobData: JobData[] = data.jobs;
        
        const total = jobData.reduce((acc: number, curr: JobData) => acc + curr.jobs, 0);
        setChartData(jobData);
        setTotalJobs(total);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    }

    fetchUpdatedJobs();
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        {/* <CardTitle>Pie Chart - Donut with Text</CardTitle> */}
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="jobs"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalJobs.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Jobs
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total jobs for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
