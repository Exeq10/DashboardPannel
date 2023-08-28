import { ProductsContext } from "../context/ProductsProvider"
import { useContext } from "react"

function TableProducts() {

  
  const {dataArray} = useContext(ProductsContext)
  return (
    

 <>
 
 <table className="table-auto col-span-12 mt-5 justify-center align-middle border p-4 bg-white border-gray-200 shadow-md overflow-y-scroll h-9">
  <caption className="caption-top mb-2 text-center bg-white text-blue-500 p-2">
  
  Productos más vendidos 
  </caption>
  <thead>
    <tr className="bg-blue-500 text-white">
      <th className="p-3">ID</th>
      <th className="p-3">Producto</th>
      <th className="p-3">Descripción</th>
      <th className="p-3">Categoría</th>
      <th className="p-3">Stock</th>
      <th className="p-3">Precio</th>
    
    </tr>
  </thead>
  <tbody className="">
   {
    dataArray.map((product,key) => {

     

      
      return (
        <tr key={key} className="hover:bg-gray-100 duration-150">
        <td className="p-3 text-center shadow-inner ">  <i className="fa-solid fa-chevron-up text-green-700 text-sm" ></i> {product.id}</td>
        <td className="p-3 text-center shadow-inner flex justify-center items-center"><img src={product.image} alt="producto" className="w-8" /> </td>
        <td className="p-3 text-start shadow-inner" >{product.title}</td>
        <td className="p-3 text-center shadow-inner capitalize">{product.category}</td>
        <td className="p-3 text-center shadow-inner">{product.rating.count}</td>
        <td className="p-3 text-center shadow-inner"> ${product.price}</td>
      </tr>
      )
      




    })
   }
  
  </tbody>
</table>
</>
  )
}

export default TableProducts