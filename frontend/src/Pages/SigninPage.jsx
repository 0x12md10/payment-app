import { useRecoilState } from "recoil"
import Button from "../Component/Button/Button"
import Form from "../Component/Form/Form"
import signinAtom from "../Store/atoms/signinAtom"
import { useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function SigninPage() {

  const [signin , setSignin] = useRecoilState(signinAtom);


  const handleChange = useCallback((e)=> {
      setSignin(curr => {
        return {
          ...curr,
          [e.target.name] : e.target.value
        }
      })
  },[setSignin])

  async function handleSubmit() {
    if(signin.username.length !== 0 && signin.password.length !== 0) {
      try {
        const msg = await axios.post("http://localhost:3000/api/v1/user/signin" ,
          {username : signin.username ,password : signin.password}
        );
        if(msg.status === 200 && msg.data.token) {
          localStorage.setItem("token" , msg.data.token);
              
          setSignin(curr => {
            return {
              ...curr,
              username : "",
              password : ""
            }
          })
          toast.success("🎉 Successfully Signed in.")
        }
        
      } catch (error) {
        setSignin(curr => {
          return {
            ...curr,
            username : "",
            password : ""
          }
        })
          toast.error("❌ Enter a valid username and password")
      }
    } else {
      setSignin(curr => {
        return {
          ...curr,
          username : "",
          password : ""
        }
      })
      toast.warn("💁 No inputs found")
    }



  }

  return (
    <><div className="h-full flex flex-col gap-y-4 justify-center items-center">
        <div className="border shadow-md  rounded-lg  w-[20%]">
        <div  className="flex flex-col w-full justify-center items-strech gap-y-5 py-5 pl-4 pr-4">
          <div className="text-center font-semibold text-lg">Sign in</div>
        <Form name={"username"} label={"Enter your email"} type={"email"} placeholder={"john@gmail.com"} value={signin.username} handleChange={handleChange} />
        <Form name={"password"} label={"Enter your passowrd"} type={"password"} placeholder={"Some secret"} value={signin.password} handleChange={handleChange}></Form>
        <Button handleSubmit={handleSubmit} label={"sign in"}/>
        </div>
      </div>
      <div className="text-sm text-gray-500">Don&apos;t have an Account ? <span className="font-bold underline"><Link to={"/signup"}>Sign up</Link></span></div>
    
    </div><ToastContainer/></>

  )
}

export default SigninPage