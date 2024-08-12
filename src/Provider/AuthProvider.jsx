import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../components/firebase/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log('Observe our currentUser', currentUser);
            
        })
        return()=>{
            unSubcribe();
        }
    },[])




    const authInfo = {user, createUser, signInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;