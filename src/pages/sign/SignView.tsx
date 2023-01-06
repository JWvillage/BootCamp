import React from 'react';
import {
    SignIn,
    SignUp
} from "../../components";
import {Header} from "../../shared";


const SignView = (props: { sign: string; }) => {
    return (
        <>
            <Header />
            {props.sign === 'signIn' && <SignIn />}
            {props.sign === 'signUp' && <SignUp />}
        </>
    );
};

export default SignView;