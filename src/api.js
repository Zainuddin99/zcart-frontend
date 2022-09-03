const axios = require('axios')
require('dotenv').config()

const hostedServerUrl = 'https://zcart.herokuapp.com'
const localServerUrl = 'http://localhost:5000'

let URL

if (process.env.NODE_ENV === 'production') {
    URL = hostedServerUrl
} else {
    URL = localServerUrl
}

const API = axios.create({ baseURL: URL })

API.interceptors.request.use((req) => {
    const userToken = localStorage.getItem('userToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if (userToken) {
        req.headers.Authorization = `Bearer ${userToken}`
        req.headers.refreshtoken = refreshToken
    }
    return req
})

export const signIn = (data) => API.post('/users/signin', data)

export const signUp = (data) => API.post('/users/signup', data)

export const verifyToken = (token) => API.post('/users/verify', { token })

export const refreshTokens = () => API.post('/users/refreshTokens')

export const logoutApi = () => API.post('/users/logout')

export const addItemsToCartAPI = (data) => API.post('/carts/add', data)

export const getCartItemsAPI = () => API.get('/carts')

export const deleteCartItemAPI = (id) => API.patch('/carts/' + id)