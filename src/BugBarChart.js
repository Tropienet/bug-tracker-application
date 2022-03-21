import React from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, YAxis, XAxis, Legend } from "recharts";

const COLORS = ["#FF0000", "#0000FF"]

function BugBarChart(props) {
    const { backendBugs, frontendBugs } = props;

    const bugData = [
        {bugType: "Backend", Backend: backendBugs, Frontend: frontendBugs}
    ];

    return(
        <BarChart
          width={500}
          height={300}
          data={bugData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bugType" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Backend" fill="#FF0000" />
          <Bar dataKey="Frontend" fill="#0000FF" />
        </BarChart>
    )

}

export default BugBarChart;