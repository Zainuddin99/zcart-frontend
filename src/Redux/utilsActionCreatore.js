import { logoutApi, signIn, signUp, verifyToken } from "../api"
import { updateStoredCart, clearStoredCart } from './cartReducerActionCreator'

export const switchToPage = (page) => {
    return {
        type: 'SWITCH TO PAGE',
        payload: page
    }
}

const startLoading = () => {
    return {
        type: 'START LOADING',
    }
}

const stopLoading = () => {
    return {
        type: 'STOP LOADING'
    }
}

const handleError = (message) => {
    return {
        type: 'HANDLE ERROR',
        payload: message
    }
}

export const addLoggedUser = (user) => {
    return {
        type: 'ADD LOGGED USER',
        payload: user
    }
}

export const openModal = (content) => {
    return {
        type: 'OPEN MODAL',
        payload: content
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE MODAL'
    }
}

export const handleSubmitSign = (data, type) => {
    return async (dispatch) => {

        const signAfterTasks = (modalMessage) => {
            dispatch(stopLoading())
            dispatch(openModal(modalMessage))
            window.history.back()
        }

        dispatch(startLoading())

        try {
            if (type === 'signin') {
                const response = await signIn(data)
                localStorage.setItem("userToken", response.data.userToken)
                localStorage.setItem("refreshToken", response.data.refreshToken)
                signAfterTasks('Successfully logged in')
                dispatch(verifyLoggeduser(response.data.userToken))
                dispatch(updateStoredCart())
            } else {
                const response = await signUp(data)
                signAfterTasks(response.data.message)
            }
        } catch (err) {
            dispatch(handleError(err?.response?.data?.message))
        }
    }
}

export const clearTokens = () => {
    localStorage.clear('userToken')
    localStorage.clear('refreshToken')
}

export const verifyLoggeduser = (token) => {
    return async (dispatch) => {
        try {
            const response = await verifyToken(token)
            dispatch(addLoggedUser(response.data))
        } catch (error) {
            clearTokens()
        }
    }
}

export const clearErrorMessage = () => {
    return {
        type: 'CLEAR ERROR'
    }
}

const logoutUserClient = () => {
    return {
        type: 'LOGOUT USER'
    }
}

export const logoutUser = () => {
    return async dispatch => {
        await logoutApi()
        dispatch(logoutUserClient())
        clearTokens()
        dispatch(clearStoredCart())
        dispatch(openModal('Successfully logged out'))
    }
}