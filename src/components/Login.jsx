import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Login() {
  const { setAuth } = useContext(UserContext);

  const navigate = useNavigate();

  localStorage.setItem("email", "root@gmail.com");
  localStorage.setItem("password", "root");
  /* Usuario registrado */

  const user = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* array de errores */

  const [errores, setErrores] = useState([]);
  /* controla el submit */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      if (email == user.email && password == user.password) {
        localStorage.setItem("auth", JSON.stringify(true));
        setAuth(true);
        navigate("/");
      } else {
        setErrores(["Verifique sus datos, usuario no válido"]);
      }
    } else {
      setErrores(["Complete sus datos"]);
      console.log(errores);
    }

    setTimeout(() => {
      setErrores("");
    }, 1500);
  };

 /*  useEffect(() => {
    alert("user:root@gmail.com password:root ");
  }, []); */

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gray-100 bg-custom  ">
      {/* cuadro de login */}
      <div className=" md:w-3/12 sm:w-12/12  w-10/12 bg-white flex flex-col p-3 justify-center items-center gap-10 rounded-md shadow-md">
        {/* formulario de login  */}
        <div className="login_image_logo">
          {/*  <img src="#" alt="Logo" /> */}
        </div>
        <h1 className="text-5xl font-black text-sky-700  ">
          <span
            className="px-2 py-1 rounded-md text-white bg-sky-700
          "
          >
            Intelli
          </span>
          Stock{" "}
        </h1>

        <h2>Iniciar sesión con correo electrónico</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex justify-center items-center flex-col gap-5"
        >
          {/* div del logo  */}
          {/* input de usuario  */}
          {errores?.length > 0 ? (
            <p className="text-red-500">{errores} </p>
          ) : (
            ""
          )}

          <div className="flex flex-col gap-2">
            {/* input de usuario  */}
            <div className=" flex flex-col justify-center items-start ">
              <label className="">Usuario</label>
              <input
                type="text"
                className="py-1 px-3 rounded-md border border-sky-700"
                placeholder="Correo eléctronico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* input de empresa  */}
            <div className="flex flex-col justify-center items-start">
              <label className="">Contraseña</label>
              {/* input password */}

              <input
                type="password"
                placeholder="Contraseña"
                className="py-1 px-3 rounded-md  border border-sky-700"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <a className="text-center" href="#">
            ¿Olvidó su contraseña?
          </a>

          <div className=" flex flex-col justify-center items-center gap-4">
            <input
              type="submit"
              value={"Login"}
              className="bg-sky-700 text-white w-full py-1 px-3 rounded-md hover:bg-white hover:text-sky-700 duration-200 border border-sky-700 cursor-pointer hover:scale-105 "
            />

            <button className="border  border-gray-400 flex items-center py-1 px-3 rounded-md">
              {" "}
              <img src="./google.svg" /> Iniciar sesión con Google
            </button>
          </div>
        </form>

        <p>
          ¿No tiene una cuenta?{" "}
          <Link className="text-sky-700 " to={"/register"}>
            Registrarse ahora
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
