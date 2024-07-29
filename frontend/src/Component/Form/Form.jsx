import Button from "../Button/Button"

function Form({type}) {
  return (
    <div  className="flex flex-col w-full justify-center items-strech gap-y-5 py-5 pl-4 pr-4">
      <div className="text-center font-semibold text-lg">{type}</div>
        <div><label className="block text-md font-medium w-full py-2" htmlFor="email">Enter you email</label><input className="p-2 bg-slate-50 w-full rounded" id="email" type="text" placeholder="john@gmail.com" /></div>
        <div><label className="block text-md font-medium w-full py-2" htmlFor="password">Enter your password</label><input className="p-2 bg-slate-50 w-full rounded" id="password" type="password" placeholder="Enter your password" /></div>
        <Button label={"Signin"} />
    </div>
  )
}

export default Form