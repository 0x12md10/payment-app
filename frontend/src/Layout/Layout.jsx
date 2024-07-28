import {Link, Outlet} from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";


function Layout() {
  return (
    <div className="flex flex-col justify-start h-screen font-mono">
        <nav>
            <Navbar/>
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout