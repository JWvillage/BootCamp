import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const SignOut = () => {

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('loginId')
        navigate('/')
    }

    useEffect(() => {
        signOut()
    })

    return (
        <></>
    );
};

export default SignOut;