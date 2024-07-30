import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"


function Navbar() {

  let tokenRef = useRef()

   tokenRef.current = localStorage.getItem("token") ? localStorage.getItem("token") : "";

   const [user,setUser] = useState("");

  useEffect(()=> {
    async function fetchUser() {
      let user = await axios.get("http://localhost:3000/api/v1/user/me" , {
        headers : {
          Authorization : `Bearer ${tokenRef.current}`
        }

       
      })

      setUser(user.data)
    }

    
   if(tokenRef.current) {
    fetchUser()
   }
  },[tokenRef])
  console.log(user)
  return (
    <div className="flex h-[10vh] flex-row justify-between w-full items-center text-text px-7 py-2 border-b border-black-500 shadow">
       <div className="font-bold antialiased  leading-2 text-2xl"><span className="text-blue text-4xl font-bold">P</span>aytm</div>
       <div className="flex flex-row justify-center gap-x-4 items-center">
        <div><Link to={"/dashboard"} >Dashboard</Link></div>
        {user ? <div className=" flex flex-row items-center justify-center bg-blue rounded-full p-4 size-6"><span className="font-semibold text-lg ">{user.firstName[0]}</span></div> : <div><Link to={"/signup"}>Sign Up</Link></div>}
       </div>
    </div>
  )
}

export default Navbar