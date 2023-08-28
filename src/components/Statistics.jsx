

function Statistics() {
  return (
    <section className="col-span-6 grid grid-cols-4 gap-3 h-96 grid-rows-4 justify-center items-center flex-wrap">

<div className="bg-white col-span-2  row-span-2 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">

            <h2 className="text-start text-lg">Clientes</h2>
            <h3 className="font-semibold text-2xl "> 25,000</h3>

            <div>
            <p className="mb-2 flex gap-2 items-center text-green-700"><i className="fa-solid fa-chevron-up" ></i>5.25%</p>

<p className="text-gray-400 text-sm">Since last mounth</p>

            </div>


    </div>
    {/* Orders */}
    <div className="bg-white col-span-2 row-span-2 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">

            <h2 className="text-start text-lg">Pedidos</h2>
            <h3 className="font-semibold text-2xl "> 29,000</h3>

            <div>
            <p className="mb-2 flex gap-2 items-center text-red-700"><i className="fa-solid fa-chevron-down" ></i>5.25%</p>

<p className="text-gray-400 text-sm">Since last mounth</p>

            </div>


    </div>
    {/* Earrings */}
    <div className="bg-white col-span-2  row-span-2 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">

            <h2 className="text-start text-lg">Ganancias</h2>
            <h3 className="font-semibold text-2xl ">$ 7,000</h3>

            <div>
            <p className="mb-2 flex gap-2 items-center text-red-700"><i className="fa-solid fa-chevron-down" ></i>8.25%</p>

<p className="text-gray-400 text-sm">Since last mounth</p>

            </div>


    </div>
    {/* Growth */}

    <div className="bg-white col-span-2  row-span-2 text-start  flex flex-col justify-center p-5 rounded-md shadow-md gap-2 ">

            <h2 className="text-start text-lg">Crecimiento</h2>
            <h3 className="font-semibold text-2xl "> + 45,05%</h3>

            <div>
            <p className="mb-2 flex gap-2 items-center text-green-700"><i className="fa-solid fa-chevron-up" ></i>5.25%</p>

<p className="text-gray-400 text-sm">Since last mounth</p>

            </div>


    </div>



    </section>
  )
}

export default Statistics