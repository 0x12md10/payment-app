import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import Dashboard from "./Pages/Dashboard";
import { useRecoilValue } from "recoil";
import { authTokenAtom } from "./Store/atoms/authAtom";

function App() {

  const authToken = useRecoilValue(authTokenAtom);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={authToken ? <Dashboard/> :<SignupPage />} ></Route>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="signin" element={<SigninPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
