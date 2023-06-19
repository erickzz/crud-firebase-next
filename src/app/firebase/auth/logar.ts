import app from '../config'
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth'

const auth = getAuth(app)

export default async function logar(email:string,password:string) {
    let result =null;
    let error= null
    try{
        result = signInWithEmailAndPassword(auth,email,password)
    }catch(e){
        error =e 
    }
    return{result, error}
}