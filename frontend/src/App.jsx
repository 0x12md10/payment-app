import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Button from "./Component/Button/Button";
import Signin from "./Component/Signin/Signin";
import SigninPage from "./Pages/SigninPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<SigninPage />} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
