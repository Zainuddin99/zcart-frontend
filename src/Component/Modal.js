import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { closeModal } from '../Redux/utilsActionCreatore'

function Modal() {
    const modal = useSelector(state=>state.utils.modal)
    const dispatch = useDispatch()

    useEffect(()=>{
        const timeout = setTimeout(()=>dispatch(closeModal()), 3000)

        return () => clearTimeout(timeout)
    })
    return (
        <CSSTransition in={modal.open} timeout={200} classNames="modal" unmountOnExit>
            <div className='modal'>
            <h2>{modal.content}</h2>
            </div>
        </CSSTransition>
    )
}

export default Modal
