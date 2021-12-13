import React from 'react';
import { useState } from 'react';
import { initilizeFirebase } from '../Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, updateProfile, signOut, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, getIdToken, createUserWithEmailAndPassword } from "firebase/auth";
import { Password } from '@mui/icons-material';
import { useEffect } from 'react';
import { lightGreen } from '@mui/material/colors';



// initilize firebase app;
initilizeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState();
    const [isLoading, setIsLading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token,setToken]= useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

               
                const newUser = { email, password, name };

                // save User to database 

                saveUser(email, name, "POST")
                // Update users profile 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    setAuthError(error.message)
                });


                setUser(newUser)
                history.replace('/')
                setAuthError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLading(false));
    }

    const logOutUser = () => {
        setIsLading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLading(false));
    }

    const loginUser = (email, password, history) => {
        setIsLading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(a => {
                history.replace('/')
                setUser(a.user)
                setAuthError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            }).finally(() => setIsLading(false))
    }


    const signInWithGoogle = (location, history) => {
        setIsLading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setUser(user)
                // upsert user to database
                saveUser(user.email, user.displayName, "PUT")
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLading(false));

    }

    // save User to database 

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`https://obscure-bayou-38255.herokuapp.com/users`, {
            method: `${method}`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        fetch(`https://obscure-bayou-38255.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLading(false)
        });
        return () => unsubscribe;
    }, [])

    return {
        user, setUser, registerUser, logOutUser, loginUser, isLoading, authError, signInWithGoogle, admin,token
    }





};

export default useFirebase;