import { useRecoilState } from "recoil"
import Button from "../Component/Button/Button"
import Form from "../Component/Form/Form"
import signinAtom from "../Store/atoms/signinAtom"
import { useCallback } from "react";
import { Link } from "react-router-dom";

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

  

  return (
    <><div className="h-full flex flex-col gap-y-4 justify-center items-center">
        <div className="border shadow-md  rounded-lg  w-[20%]">
        <div  className="flex flex-col w-full justify-center items-strech gap-y-5 py-5 pl-4 pr-4">
          <div className="text-center font-semibold text-lg">Sign in</div>
        <Form name={"username"} label={"Enter your email"} type={"email"} placeholder={"john@gmail.com"} value={signin.email} handleChange={handleChange} />
        <Form name={"password"} label={"Enter your passowrd"} type={"password"} placeholder={"Some secret"} value={signin.password} handleChange={handleChange}></Form>
        <Button label={"sign in"}/>
        </div>
      </div>
      <div className="text-sm text-gray-500">Don&apos;t have an Account ? <span className="font-bold underline"><Link to={"/signup"}>Sign up</Link></span></div>
    
    </div></>

  )
}

export default SigninPage