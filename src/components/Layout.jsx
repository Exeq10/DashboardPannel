import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import { useNavigate } from "react-router-dom";
const Options = [
  { option: "Inicio", icon: "fa-solid fa-gauge",route:'/' },
  { option: "Usuario", icon: "fa-solid fa-user",route:'/users' },
  { option: "Estadísticas", icon: "fa-solid fa-chart-simple",route:'/statics' },
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
      <section className="flex flex-col h-screen   w-full bg-gray-100 ">
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
            <h1>Dashboard</h1>
          </div>
        <div className="flex gap-5">
        <p className="text-sm">Bienvenido <span className="bg-white py-1 px-3 text-blue-600 rounded-md">{nickname}</span></p>

          <i className="fa-solid fa-bell "></i>

          <button className="px-3 text-sm  text-white " onClick={()=> closeSesion()}>Cerrar sesión</button>
        </div>
        </header>

        <div className="flex h-auto bg-white    ">
          {/* aside nav */}
          <aside
            className={`h-full ease-in duration-300  overflow-hidden ${
              wfull ? "w-2/12 " : "w-1/12 "
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
            </ul>
          </aside>
          <main className=" grid grid-cols-12 w-full  row-auto h-auto   border  gap-3 p-5 bg-gray-200">
   
   <Outlet />

   </main>
        </div>


      </section>
    </>
  );
}

export default Layout;
