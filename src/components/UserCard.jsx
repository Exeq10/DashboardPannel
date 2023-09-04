

function UserCard({user}) {
  return (
    <div className='flex  bg-white md:flex-row w-full justify-between  flex-col gap-4   py-3 px-5 rounded-md shadow-md hover:bg-sky-300 duration-150 '>

            <div className="flex items-center gap-2 flex-1 ">
                <i className="fa-solid fa-user"></i>
                <p className="capitalize"> {user.name.firstname} {user.name.lastname}  </p>
            </div>
            <div className="flex items-center gap-2 flex-1 ">
                <i className="fa-solid fa-envelope"></i>
                <p> {user.email}  </p>
            </div>
            <div className="flex items-center gap-2 flex-1 ">
                <i className="fa-solid fa-house"></i>
                <p className="capitalize"> {user.address.city}  </p>
            </div>
            <div className="flex items-center gap-2 flex-1">
                <i className="fa-solid fa-phone"></i>
                <p> {user.phone}  </p>
            </div>
            <div className="flex  items-center gap-2 flex-1 ">
               
               <button className=" py-1 px-2 text-sm bg-orange-500 rounded-md text-white">Modificar</button>
               <button className=" py-1 px-2 text-sm bg-green-500 rounded-md text-white">Llamar</button>
               <button className=" py-1 px-2 text-sm bg-sky-500 rounded-md text-white">Info</button>
               <button className=" py-1 px-2 text-sm bg-red-700 rounded-md text-white">Eliminar</button>
      
            </div>

             




    </div>
  )
}

export default UserCard