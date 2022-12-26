import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

initializeAuthentication();

const SignUp = () => {
    // const { signInUsingGoogle } = useAuth();
    // const history = useHistory();
    // const location = useLocation();

    // // console.log(location.state?.from);
    // const redirect_url = location.state?.from || '/';


    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(
    //                 redirect_url
    //             )
    //         })
    // };


    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider);
    }




    return (
        <div className='container'>
            <h1 className='title'>SignUp</h1>
            <div className='row justify-content-center'>
                <div className='col-md-4 text-center py-4'>
                    <button
                        className='view-cart-btn'
                        onClick={handleGoogleLogin}
                    >
                        <GoogleIcon /> Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
