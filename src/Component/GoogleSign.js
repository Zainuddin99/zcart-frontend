import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { handleSubmitSign } from '../Redux/utilsActionCreatore'
import env from 'dotenv'

function GoogleSign() {
    const dispatch = useDispatch()

    const googleLoginSuccess = (result) =>{
        dispatch(handleSubmitSign({googleSign: result.profileObj}, 'signin'))
    }

    const googleLoginFail = (err) =>{
        console.log(err);
    }

    return (
        <>
            <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGLE_KEY}
            render = {(renderProps) =>(
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign with Google</button>
            )}
            onSuccess={googleLoginSuccess}
            onFailure={googleLoginFail}
            cookiePolicy="single_host_origin"
            />
        </>
    )
}

export default GoogleSign
