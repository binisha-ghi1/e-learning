import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import {auth} from './firebase'



export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
};

export const  doSignWithGoogle = async ()=> {
    const  provider =  new GoogleAuthProvider();
    const  result = await signInWithPopup(auth, provider);
    //result.user
    return result
}