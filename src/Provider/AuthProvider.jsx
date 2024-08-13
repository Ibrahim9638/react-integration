import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../components/firebase/firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvide = new GoogleAuthProvider();

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth);

    }
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvide);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log('Observe our currentUser', currentUser);
            
        })
        return()=>{
            unSubcribe();
        }
    },[])



    const authInfo = {user, loading, createUser, signInUser, logout, googleSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;