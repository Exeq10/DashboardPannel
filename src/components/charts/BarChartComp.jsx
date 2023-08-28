import { useState, useEffect, useContext } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  Legend,
  LabelList,
  Label,
} from "recharts";
import { ProductsContext } from "../../context/ProductsProvider";

function BarChartComp() {
  

  const {dataArray} = useContext(ProductsContext)

  return (
    <section className="col-span-5">
      <ResponsiveContainer width={600} height={300} className={"bg-white"}>
        <BarChart
          data={dataArray}
          margin={{ top: 2, bottom: 2, left: 4, right: "10" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Productos" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Precios",
              angle: -90,
              position: "insideLeft",
              textAnchor: "middle",
            }}
          />
          <Bar dataKey="price" fill="#9CA3AF">
            
          </Bar>
          <Bar dataKey="rating.count" fill="#3B82F6">
            <LabelList dataKey="rating.count" position="top" />
          </Bar>
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default BarChartComp;
