import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import Dashboard from "./Pages/Dashboard";

function App() {

  const token = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={token ? <Dashboard/> :<SignupPage />} ></Route>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="signin" element={<SigninPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
