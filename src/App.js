import Main from "./Component/Mainpage/Main";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from "./Component/Products";
import React, { useCallback, useEffect } from "react";
import CartPage from "./Component/Cart/CartPage";
import ErrorPage from "./Component/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { updateStoredCart } from "./Redux/cartReducerActionCreator";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Signup from "./Component/SignUp/index";
import Modal from "./Component/Modal";
import { logoutUser, verifyLoggeduser } from "./Redux/utilsActionCreatore";
import { refreshTokens } from "./api";

function App() {
  const cart = useSelector(state => state.cart)
  const { loggedUser } = useSelector(state => state.utils)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) {
      dispatch(verifyLoggeduser(token))
    }
  }, [])

  useEffect(() => {
    dispatch(updateStoredCart())
  }, [])

  const refreshTokensFunction = useCallback(async () => {
    try {
      console.log("refreshing")
      const response = await refreshTokens()
      localStorage.setItem("userToken", response.data.userToken)
      localStorage.setItem("refreshToken", response.data.refreshToken)
    } catch (error) {
      dispatch(logoutUser())
    }
  }, [dispatch])

  useEffect(() => {
    if (loggedUser) {
      const timer = setInterval(() => {
        refreshTokensFunction()
      }, 60 * 12 * 1000)

      return () => clearInterval(timer)
    }
  }, [loggedUser, refreshTokensFunction])

  useEffect(() => {
    if (loggedUser) {
      refreshTokensFunction()
    }
  }, [loggedUser, refreshTokensFunction])

  return (
    <div className="App">
      <Router>
        <Modal />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/carts'>
            <CartPage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
