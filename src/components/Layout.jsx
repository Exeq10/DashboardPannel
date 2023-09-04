import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import { useNavigate } from "react-router-dom";
const Options = [
  { option: "Inicio", icon: "fa-solid fa-gauge",route:'/' },
  { option: "Usuario", icon: "fa-solid fa-user",route:'/users' },
  { option: "Estadísticas", icon: "fa-solid fa-chart-simple",route:'/charts' },
  { option: "Transacciones", icon: "fa-solid fa-cart-shopping",route:'/transactions' },
];



function Layout({children}) {



  const navigate = useNavigate()

const nickname = localStorage.getItem('email') || ''




  const [wfull, setWfull] = useState(false);

  const handleWith = () => {
    if (wfull) {
      setWfull(false);
    } else if (!wfull) {
      setWfull(true);
    }
  };



  /* cerrar sesión */


  const closeSesion = ()=> {

    localStorage.setItem('auth',JSON.stringify(false))

    navigate('/login')


  }

  return (
    <>
      <section className=" flex    flex-col h-screen   w-full bg-gray-100 ">
        <header
          className={`bg-blue-500 flex  ${
            wfull ? "w-10/12" : "w-12/12 "
          }  items-center justify-between px-8 py-3 w-full h-24 shadow-lg font-semibold text-white text-xl`}
        >
          <div className="flex gap-5 items-center">
            {!wfull ? (
              <button
                className="w-10 h-10 rounded-full  hover:bg-blue-400 duration-200 "
                onClick={() => handleWith()}
              >
                <i className="fa-solid fa-bars"></i>{" "}
              </button>
            ) : (
              <button
                className="w-10 h-10 rounded-full  hover:bg-blue-400 duration-200 "
                onClick={() => handleWith()}
              >
                <i className="fa-solid fa-xmark"></i>{" "}
              </button>
            )}
            <h1 className="md:flex   hidden">Dashboard</h1>
          </div>
        <div className="flex gap-5  ">
        <p className="text-sm    md:visible  hidden  ">Bienvenido <span className="bg-white py-1 px-3 text-blue-600 rounded-md">{nickname}</span></p>

          <i className="fa-solid fa-bell "></i>

          <button className="px-3 text-sm   text-white " onClick={()=> closeSesion()}><i className="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión</button>
        </div>
        </header>

        <div className="flex h-auto bg-white    ">
          {/* aside nav */}
          <aside
            className={`h-full ease-in duration-300 md:relative  absolute  overflow-hidden ${
              wfull ? "md:w-2/12 w-12/12 z-10 duration-200 " : "md:w-1/12 w-0 "
            } bg-white  h-full flex-col  `}
          >
            <ul className="w-full h-full justify-start text-gray-600  items-start flex flex-col  ">
              {Options.map((op, key) => (
                  <Link to={op.route}  className={`${
                    wfull
                      ? "items-center w-full text-start py-1 block  group "
                      : "w-full text-center text-2xl justify-center items-center"
                  }  hover:bg-gray-400 hover:text-white hover:cursor-pointer  `}
                  key={key}>
                <li
                 
                >
                
                    <i className={`  ${op.icon} ml-2 mr-2 py-5 `}></i>
                    {wfull ? op.option : ""}
                </li>
                  </Link>
              ))}


                  {/*   {
                      wfull ?<button className="px-3   text-gray-600 justify-center  items-center w-full  mt-2 py-1 sm:flex hidden gap-2  " onClick={()=> closeSesion()}><i className="fa-solid fa-arrow-right-from-bracket text-xl"> </i>Cerrar sesión</button>  : <button className="px-3 text-gray-600 justify-center  items-start w-full text-xl mt-2 py-1 sm:flex hidden  gap-2  " onClick={()=> closeSesion()}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>

                      
                    } */}
            </ul>
          </aside>
          <main className=" md:grid md:grid-cols-12 w-full  flex flex-wrap justify-center   row-auto h-full  border  gap-3 p-5 bg-gray-200">
   
   <Outlet />

   </main>
        </div>


      </section>
    </>
  );
}

export default Layout;
