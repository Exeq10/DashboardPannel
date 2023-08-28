import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [dataArray, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");

    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductsContext.Provider value={{ dataArray }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
