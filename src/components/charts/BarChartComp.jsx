import { Chart } from "react-google-charts";





function BarChartComp() {

  const data = [
    ["Mes", "Ventas", "Clientes", "Ganacias"],
 [  "Enero", 1500 , 145 , 500  ],
[  "Febrero",1500 , 1123 , 800  ],
  ["Marzo",1500 , 111 , 586 ],
 [ "Abril",1500 , 122 , 596  ],
 [ "Mayo",1500 , 129 , 456 ],
 [ "Junio",1500 , 178 , 123  ],
 [ "Julio",1500 , 145 , 693  ],
  ["Agosto",1500 , 143 , 485 ],
 [ "Setiembre",1500 , 169 , 963  ],
  ["Octubre",1500 , 135 , 456  ],
 [ "Noviembre",1500 , 169 , 890  ],
 [ "Diciembre",1500 , 189 , 523 ]
  ];
  
   const options = {
    chart: {
      title: "Datos Anuales",
      subtitle: "Ventas, Clientes, Crecimiento ",
    },
  };

  return (
    
    <Chart
    chartType="Bar"
    width="95%"
    height="290px"
    data={data}
    options={options}
  />
  )
}

export default BarChartComp