import React from 'react';
import {
    IdSearch, PwSearch,
    SignIn,
    SignOut,
    SignUp
} from "../../components";
import {Header} from "../../shared";

const SignView = (props: { sign: string; }) => {

    return (
        <>
            <Header />
            {props.sign === 'signIn' && <SignIn />}
            {props.sign === 'signUp' && <SignUp />}
            {props.sign === 'signOut' && <SignOut />}
            {props.sign === 'idSearch' && <IdSearch />}
            {props.sign === 'pwSearch' && <PwSearch />}
        </>
    );
};

export default SignView;