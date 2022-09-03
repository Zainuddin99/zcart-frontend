import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrorMessage, handleSubmitSign } from '../../Redux/utilsActionCreatore'
import GoogleSign from '../GoogleSign'

function Signup() {
    const [inputes, setInputs] = useState({firstName: '', lastName: '', eMail: '', password: '', confirmPassword: ''})
    const [inputError, setInputError] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state.utils)

    const handleInput = (e) =>{
        setInputs({...inputes, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        let errors = {}
        e.preventDefault()
        if(inputes.firstName && inputes.lastName && inputes.eMail && inputes.password && inputes.confirmPassword){
            if(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i.test(inputes.eMail) === false){
                errors.eMail = 'Enter valid email'
            }
            if(/[a-zA-Z0-9]/ig.test(inputes.password) === false || inputes.password.length < 8){
                errors.password = 'Password is weak'
            }
            if(inputes.password !== inputes.confirmPassword){
                errors.confirmPassword = 'Password do not match'
            }
            if(!Object.keys(errors).length){
                dispatch(handleSubmitSign(inputes, 'signup'))
            }
        }else{
            errors.all = 'Some inputs missing'
        }
        setInputError(errors)
    }

    useEffect(()=>{
        const timeout = setTimeout(()=>dispatch(clearErrorMessage()), 2000)

        return ()=>clearTimeout(timeout)
    }, [state.errorMessage, dispatch])

    return (
        <div className='form-container'>
        <form className='login' onSubmit={handleSubmit}>
            <input type="text" name='firstName' placeholder='First Name' value={inputes.firstName} onChange={handleInput} autoComplete='off' />
            <input type="text" name='lastName' placeholder="Last Name" value={inputes.lastName} onChange={handleInput} autoComplete='off' />
            <input type="email" name='eMail' placeholder='Enter E-Mail' value={inputes.eMail} onChange={handleInput} autoComplete='off' />
            {inputError.eMail && <p className='form-inline-error'>{inputError.eMail}</p>}
            <input type="password" name='password' placeholder='Password' value={inputes.password} onChange={handleInput} />
            {inputError.password && <p className='form-inline-error'>{inputError.password}</p>}
            <input type="password" name='confirmPassword' placeholder='Confirm Password' value={inputes.confirmPassword} onChange={handleInput}/>
            {inputError.confirmPassword && <p className='form-inline-error'>{inputError.confirmPassword}</p>}
            {inputError.all && <p className='form-inline-error'>{inputError.all}</p>}
            {state.errorMessage && <h6 className='form-error'>{state.errorMessage}</h6>}
            <button type='submit'>{state.loading ? 'Please wait' : 'Sign up'}</button>
        </form>
        <div className='google-sign'>
            <GoogleSign/>
        </div>
        </div>
    )
}

export default Signup
