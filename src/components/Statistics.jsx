function Statistics() {
  return (
    <section className="col-span-6 md:grid md:grid-cols-4 grid-cols-12  flex  gap-3 h-96 grid-rows-4 justify-center items-center flex-wrap">
      <div className="bg-white  md:col-span-2 md:row-span-2 col-span-12 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">
        <h2 className="text-start text-lg">Clientes</h2>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold md:text-2xl text-lg "> 29,000</h3>
          <i className="fa-solid fa-users md:text-3xl text-gray-600 "></i>
        </div>

        <div>
          <p className="mb-2 flex gap-2 items-center text-green-700">
            <i className="fa-solid fa-chevron-up md:text-lg text-md"></i>5.25%
          </p>

          <p className="text-gray-400 text-sm">Since last mounth</p>
        </div>
      </div>
      {/* Orders */}
      <div className="bg-white md:col-span-2 md:row-span-2 col-span-12 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">
        <h2 className="text-start text-lg">Pedidos</h2>

        <div className="flex justify-between items-center">
          <h3 className="font-semibold md:text-2xl text-lg "> 29,000</h3>
          <i className="fa-solid fa-box  md:text-3xl text-gray-600 "></i>
        </div>

        <div>
          <p className="mb-2 flex gap-2 items-center text-red-700">
            <i className="fa-solid fa-chevron-down md:text-lg text-md"></i>5.25%
          </p>

          <p className="text-gray-400 text-sm">Since last mounth</p>
        </div>
      </div>
      {/* Earrings */}
      <div className="bg-white  md:col-span-2 md:row-span-2 col-span-12 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">
        <h2 className="text-start text-lg">Ganancias</h2>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold md:text-2xl text-lg ">$ 7,000</h3>
          <i className="fa-solid fa-dollar-sign  md:text-3xl text-gray-600 "></i>
        </div>

        <div>
          <p className="mb-2 flex gap-2 items-center text-red-700">
            <i className="fa-solid fa-chevron-down md:text-lg text-md"></i>8.25%
          </p>

          <p className="text-gray-400 text-sm">Since last mounth</p>
        </div>
      </div>
      {/* Growth */}

      <div className="bg-white  md:col-span-2 md:row-span-2 col-span-12 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">
        <h2 className="text-start text-lg">Crecimiento</h2>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold md:text-2xl text-lg "> 45,06 %</h3>
          <i className="fa-solid fa-chart-line md:text-3xl text-gray-600 "></i>
        </div>
        <div>
          <p className="mb-2 flex gap-2 items-center text-green-700">
            <i className="fa-solid fa-chevron-up md:text-lg text-md"></i>5.25%
          </p>

          <p className="text-gray-400 text-sm">Since last mounth</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
