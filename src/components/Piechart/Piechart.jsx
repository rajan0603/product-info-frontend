import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Piechart.css"

const months = {
  '01':'January',
  '03':"March",
  '02':'Fabruary',
  '04':"April",
  '05':'May',
  '06':"June",
  '07':'July',
  '08':"August",
  '09':'September',
  '10':"Octomber",
  '11':'November',
  '12':"December"
}

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB",
];

export default function Piechart({ data, month }) {
  const dataset = Object.entries(data).map(([key, value]) => {
    return { name: key, value: value };
  });

  return (
    <div className= "wrapper-pie" style={{ width: "100%", height: 500 }}>
      <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2 className="heading-stat">Pie Chart States - {months[month]} <span>(Selected month name from dropdown)</span></h2>
      </div>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={dataset}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {dataset.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
