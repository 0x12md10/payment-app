
function Button({label ,handleSubmit}) {
  return (
    <div onClick={handleSubmit} type="button" className="text-white bg-black hover:bg-blue focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center">{label}</div>
  )
}

export default Button