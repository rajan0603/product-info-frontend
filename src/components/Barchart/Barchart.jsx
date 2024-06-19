import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

export default function Barchart({ data, month }) {
  const dataset = Object.entries(data).map(([key, value]) => {
    return { Price: key, Item: value };
  });

  return (
    <div style={{ width: "100%", height: 500 }}>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <h2 className="heading-stat">Bar Chart States - {months[month]} <span>(Selected month name from dropdown)</span></h2>
      </div>
      <ResponsiveContainer>
        <BarChart
          data={dataset}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Price"
            label={{ value: "Price Range", position: "insideBottom", offset: -5 }}
            interval={0}
            angle={-45}
            textAnchor="end"
          />
          <YAxis label={{ value: "Number of Items", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="Item" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}













