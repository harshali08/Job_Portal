"use client"
import React from "react";
import { PieChart, Pie, Label } from "recharts";

// Define the data with only the total user count
const totalUserCount = 1125; // Replace with the actual count

const chartData = [
  { name: "Total Users", value: totalUserCount, fill: "#8884d8" },
];

export function TotalUsers() {
  return (
    <div className="card flex flex-col">
      <div className="card-content flex-1 pb-0">
        <PieChart width={250} height={250}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
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
                      fill="#000"
                      fontSize="24"
                      fontWeight="bold"
                    >
                      {totalUserCount.toLocaleString()}
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
