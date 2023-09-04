import { useContext } from "react";

import { UserContext } from "../context/UserProvider";
import UserCard from "./UserCard";
function Users() {
  const { dataUser } = useContext(UserContext);

  console.log(dataUser);

  return (
    <>
      <h1 className="col-span-3 text-lg">Usuarios Registrados</h1>

      <div className="col-span-12 justify-end items-center flex ">

        <input type="text" className="rounded-s-md shadow-md h-11 focus:outline-none px-2"placeholder="Buscar usuario" />
        <button ><i className="fa-solid fa-magnifying-glass text-lg bg-blue-600 shadow-md text-white py-2 px-3 rounded-e-md"></i></button>


      </div>

      <div className="md:flex col-span-12   md:flex-row w-full hidden justify-between  flex-col gap-4   py-3 px-5 bg-blue-500 text-white ">
        <div className="flex items-center gap-2 flex-1 ">
          <p>Nombre</p>
        </div>
        <div className="flex items-center gap-2 flex-1 ">
          <p>Email</p>
        </div>
        <div className="flex items-center gap-2 flex-1 ">
          <p>Ciudad</p>
        </div>
        <div className="flex items-center gap-2 flex-1">
          <p> Teléfono</p>
        </div>
        <div className="flex  items-center gap-2 flex-1 ">
          <p>Acciones</p>
        </div>
      </div>
      <div className="flex flex-col col-span-full max-h-96 md:overflow-y-scroll  gap-2">
        {dataUser.map((user, key) => {
          console.log(user);

          return <UserCard user={user} key={key} />;
        })}
      </div>
    </>
  );
}

export default Users;
