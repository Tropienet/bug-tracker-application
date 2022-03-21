import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FF0000", "#0000FF"]

function BugPieChart(props) {
    const { backendBugs, frontendBugs } = props;

    const bugData = [
        {bugType: "Backend", bugs: backendBugs},
        {bugType: "Frontend", bugs: frontendBugs}
    ];

    return(
        <PieChart width={250} height={250}>
            <Pie data={bugData} dataKey="bugs" outerRadius={125} fill="green">
                {bugData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}

export default BugPieChart;