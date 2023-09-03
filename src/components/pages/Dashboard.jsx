import Statistics from "../Statistics";
import BarChartComp from "../charts/BarChartComp";
import TableProducts from "../TableProducts";

function Dashboard() {
  return (
   
    <>
           <Statistics /> 

            <div className="md:col-span-5 col-span-12   rounded-md p-5 h-auto bg-white">
              <h2 className="text-center mb-2">Tabla de productos</h2>

               <BarChartComp /> 
            </div>
            <TableProducts />

    </>
     
  )
}

export default Dashboard