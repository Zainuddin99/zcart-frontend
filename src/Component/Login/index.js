import React, { useEffect, useState } from 'react'
import '../../Styles/login.css'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { clearErrorMessage, handleSubmitSign } from '../../Redux/utilsActionCreatore'
import { useDispatch, useSelector } from 'react-redux'
import GoogleSign from '../GoogleSign'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [inputs, setInputs] = useState({eMail: "", password: ""})
    const dispatch = useDispatch()
    const state = useSelector(state => state.utils)

    const handleInput = (e) =>{
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const handleCurrentSubmit = (e) =>{
        e.preventDefault()
        if(inputs.eMail && inputs.password){
        dispatch(handleSubmitSign(inputs, 'signin'))
        }
    }

    useEffect(()=>{
        const timeout = setTimeout(()=>dispatch(clearErrorMessage()), 2000)

        return ()=>clearTimeout(timeout)
    }, [state.errorMessage])

    const {eMail, password} = inputs
    return (
        <div className='form-container'>
        <form className='login' onSubmit={handleCurrentSubmit}>
            <input name="eMail" type="email" placeholder='Enter E-Mail' value={eMail} onChange={handleInput} autoComplete='off' />
            <div className="password-container">
                <div className='bishow' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BiHide/> : <BiShow/>}</div>
                <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Enter Password' value={password} onChange={handleInput} />
            </div>
            {state.errorMessage && <h6 className='form-error'>{state.errorMessage}</h6>}
            <button type='submit'>{state.loading ? 'Please wait...' : 'Sign in'}</button>
        </form>
        <Link to='signup'><p className="sign-up">New user? Sign up</p></Link>
        <div className="google-sign">
        <GoogleSign/>
        </div>
        </div>
    )
}

export default Login
