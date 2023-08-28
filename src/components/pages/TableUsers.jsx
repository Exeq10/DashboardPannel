import { useContext } from "react";

import { UserContext } from "../../context/UserProvider";

function TableUsers() {
  const { dataUser, deleteUser } = useContext(UserContext);

  return (
    <table className="table-auto col-span-12 mt-5 justify-center align-middle border p-4 bg-white border-gray-200 shadow-md overflow-y-scroll h-9">
      <caption className="caption-top mb-2 text-center bg-white text-blue-500 p-2">
        Usuarios registrados
      </caption>
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="p-3">Id</th>
          <th className="p-3">Nombre</th>
          <th className="p-3">Email</th>
          <th className="p-3">Teléfono</th>
          <th className="p-3">Dirección</th>
          <th className="p-3">Acciones</th>
        </tr>
      </thead>
      <tbody className="">
        {dataUser.map((user, key) => {
          return (
            <tr key={key} className="hover:bg-gray-100 duration-150">
              <td className="p-3 text-center shadow-inner "> {user.id}</td>
              <td className="p-3 text-center shadow-inner flex capitalize justify-center items-center">
                {user.name.firstname}
              </td>
              <td className="p-3 text-start shadow-inner">{user.email}</td>
              <td className="p-3 text-center shadow-inner capitalize">
                {user.phone}
              </td>
              <td className="p-3 text-center shadow-inner capitalize">
                {user.address.street} N° {user.address.number}
              </td>
              <td className="p-3 flex text-center justify-center shadow-inner gap-2 capitalize">
                
                <button
                  className="py-1 px-2 bg-red-800 text-white rounded-md hover:bg-red-900 duration-150  "
                  onClick={() => deleteUser(user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableUsers;
