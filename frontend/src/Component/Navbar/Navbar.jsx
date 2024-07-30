import { Link } from "react-router-dom"

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <div className="flex h-[10vh] flex-row justify-between w-full items-center text-text px-7 py-2 border-b border-black-500 shadow">
       <div className="font-bold antialiased  leading-2 text-2xl"><span className="text-blue text-4xl font-bold">P</span>aytm</div>
       <div className="flex flex-row justify-center gap-x-4 items-center">
        <div><Link to={"/dashboard"} >Dashboard</Link></div>
        {token ? <div className=" flex flex-row items-center justify-center bg-blue rounded-full p-4 size-6"><span className="font-semibold text-lg ">A</span></div> : <div><Link to={"/signup"}>Sign Up</Link></div>}
       </div>
    </div>
  )
}

export default Navbar