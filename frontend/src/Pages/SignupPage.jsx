import { useRecoilState } from "recoil"
import Button from "../Component/Button/Button"
import Form from "../Component/Form/Form"
import signupAtom from "../Store/atoms/signupatom"
import { useCallback } from "react";
import { Link } from "react-router-dom";

function SignupPage() {

  const [signup , setSignup] = useRecoilState(signupAtom);

 
  const handleChange = useCallback((e)=> {
    setSignup(curr => {
      return {
        ...curr,
        [e.target.name] : e.target.value
      }
    })
},[setSignup])

  

  return (
    <><div className="h-full flex flex-col gap-y-4 justify-center items-center">
        <div className="border shadow-md  rounded-lg  w-[20%]">
        <div  className="flex flex-col w-full justify-center items-strech gap-y-5 py-5 pl-4 pr-4">
          <div className="text-center font-semibold text-lg">Sign up</div>
        <Form name={"firstname"} label={"Enter your firstname"} type={"text"} placeholder={"john"} value={signup.firstname} handleChange={handleChange}/>
        <Form name={"lastname"} label={"Enter your lastname"} type={"text"} placeholder={"jacobs"} value={signup.lastname} handleChange={handleChange}/>
        <Form name={"username"} label={"Enter your email"} type={"email"} placeholder={"john@gmail.com"} value={signup.username} handleChange={handleChange} />
        <Form name={"password"} label={"Enter your passowrd"} type={"password"} placeholder={"Some secret"} value={signup.password} handleChange={handleChange}></Form>
        <Button label={"Create Account"}/>
        </div>
        
      </div>
      <div className="text-sm text-gray-500">Already have an account ? <span className="font-bold underline"><Link to={"/signin"}>Sign in</Link></span></div>
    </div></>

  )
}

export default SignupPage