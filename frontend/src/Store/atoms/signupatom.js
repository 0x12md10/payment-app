import { atom } from "recoil";


const signupAtom = atom({
    key : "signupAtom",
    default : {
        firstname : "",
        lastname : "",
        username : "",
        password : ""
    }
});


export default signupAtom;