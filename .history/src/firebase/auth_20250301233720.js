import { createUserWithEmailAndPassword , GoogleAuthProvider, SignInMethod } from 'firebase/auth'
import {auth} from './firebase'



export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
};

export const  doSignWithGoogle = async ()=> {

}