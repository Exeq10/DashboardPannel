import { useRouteError, Link } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen  flex  justify-center items-center bg-white flex-col gap-6">
         <h1 className="text-5xl font-black text-sky-700  ">
          <span
            className="px-2 py-1 rounded-md text-white bg-sky-700
          "
          >
            Intelli
          </span>
          Stock{" "}
        </h1>

      <h2>Lo sentimos ha ocurrido un error</h2>

<h3 className="font-bold text-3xl">404</h3>
      <p className="font-bold text-3xl">{error.statusText || error.message}</p>

      <p>
        Trabajamos en solucionarlo,{" "}
        <span className="text-white rounded-md shadow-md px-3 py-1 bg-sky-700">
          <Link to={"/"}>Menú Principal</Link>
        </span>{" "}
      </p>
    </div>
  );
}

export default ErrorElement;
