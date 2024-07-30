import {atom} from "recoil";

const signinAtom = atom({
    key : "signinAtom",
    default : {
        username : "",
        password : ""
    }
});


export default signinAtom;