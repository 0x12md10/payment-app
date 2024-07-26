import {Link, Outlet} from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";


function Layout() {
  return (
    <div className="bg-background h-screen font-mono">
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