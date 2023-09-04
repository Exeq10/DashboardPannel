

import { createContext, useState,useEffect } from "react"



export const UserContext = createContext()

function UserProvider({children}) {


  const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('auth') )|| false)

  console.log(auth);


const [dataUser, setUser] = useState([]);

/* trae todos los usuarios en lista  */
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/users?limit=20");

    const data = await res.json();



    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);


  /*Eliminar un Usuario */
  const deleteUser = async (id)=>{


      const listUser =  dataUser.filter((userDel) => userDel.id   !=  id)

      const res = confirm(' Está seguro que desea eliminar el usuario ?')

       
      if(res) {
        setUser(listUser)
        
      }else{

        alert('Cancelaste con éxito ')
      }
}



/* validar usuario */




 

  return (
    
    <UserContext.Provider value={{dataUser,setUser, deleteUser, setAuth,auth}}>

{children}


    </UserContext.Provider>
    
  )
}

export default UserProvider
