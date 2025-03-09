import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'



export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
};

export const  doSignWithGoogle = async ()=> {
    const  provider =  new GoogleAuthProvider();
    const  result = await sign

}