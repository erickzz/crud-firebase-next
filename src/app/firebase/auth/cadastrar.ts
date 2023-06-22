import app from '../config'
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'
import addData from '../db/addData';

const auth = getAuth(app);

export default async function cadastrar (email:string,password:string,nome:string,profissao:string,cidade:string) {
    let result =null;
    let error = null;

    
    const data = {email:email,nome:nome,profissao:profissao,cidade:cidade,admin:false}
    try{
        result = await createUserWithEmailAndPassword(auth,email,password)
        const id = auth.currentUser!.uid;
        await addData('users',id,data)
    }catch(e){
        error = e
    }

        return {result,error}


} 