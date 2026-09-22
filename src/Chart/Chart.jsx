import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
const Chart = ({ data }) => {
    data=data?data.slice().reverse():[];
    console.log(data);
    return (
        <div>
             <BarChart
      style={{ width: '100%', maxWidth: 1600, maxHeight: '30vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      layout="vertical"
    >
      <XAxis
    type="number"
    dataKey="count"
    strokeWidth={0}
  />
       <YAxis
    type="category"
    dataKey="name"
    strokeWidth={0}
  />
      <Bar
        dataKey="count"
        fill="#FF8811"
        fillOpacity={0.85}
        stroke="#0369a1"
        strokeWidth={0}
        radius={0}
        barSize={30}
      />
    </BarChart>
        </div>
    );
};

export default Chart;