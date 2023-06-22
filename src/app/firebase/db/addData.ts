import {getFirestore,doc,setDoc} from 'firebase/firestore'
import app from '../config'

const db = getFirestore(app)

type user = {email:string,nome:string,profissao:string,cidade:string,admin:boolean}

    export default async function addData (collection:string,id:string,data:user)  {
        let result = null;
        let error = null;
        try{
            result = await setDoc(doc(db,collection,id),{
                email:data.email,
                nome:data.nome,
                profissao:data.profissao,
                cidade:data.cidade,
                admin:data.admin,
                id:id
            })
        }catch(e){
            error = e
        }

        return {result,error}
    }