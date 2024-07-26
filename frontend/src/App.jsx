import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Button from "./Component/Button/Button";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<div><Button label={"Sign in"}/></div>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
