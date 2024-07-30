import {Link, Outlet} from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

function Layout() {
  return (
    <div className="flex flex-col w-screen justify-start h-screen font-mono">
        <nav>
            <Navbar/>
        </nav>
        <main>
          
          <div  className="h-[90vh] w-screen"><Outlet/></div>
        </main>
    </div>
  )
}

export default Layout