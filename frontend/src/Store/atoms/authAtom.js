import axios from "axios";
import { atom, selector } from "recoil";

export const authTokenAtom = atom({
    key : "authAtom",
    default : ""
})



