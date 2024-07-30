import Button from "../Button/Button";
import { memo } from "react";

const Form = memo(({name,type,label ,placeholder,value,handleChange})=> {
  return (

    <div><label className="block text-md font-medium w-full py-2" htmlFor={label}>{label}</label><input className="p-2 bg-slate-50 w-full rounded text-gray-600" id={label} name={name} type={type} placeholder={placeholder} value={value} onChange={(e)=>handleChange(e)} /></div>
  

)
})

export default Form