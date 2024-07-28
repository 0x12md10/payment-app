import Button from "../Button/Button"

function Signin() {
  return (
    <div >
        <div><label htmlFor="email">Enter you email</label><input id="email" type="text" placeholder="Enter your mail" /></div>
        <div><label htmlFor="password">Enter your password</label><input id="password" type="password" placeholder="Enter your password" /></div>
        <Button label={"Signin"} />
    </div>
  )
}

export default Signin