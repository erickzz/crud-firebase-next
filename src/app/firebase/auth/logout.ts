import app from "../config";
import { getAuth,signOut } from "firebase/auth";

const auth = getAuth(app)

export default async function logout () {
    let result = null;
    let error = null;
    try{
        result = signOut(auth)
    }catch(e){
        error = e;
    }

    return {result,error}
}
