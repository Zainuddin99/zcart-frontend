import React from 'react'
import MainCategories from './MainCategories'
import Pagepath from './Pagepath'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DailyEssentialPage from './DailyEssentialPage'
import HomeFurnituresPage from './Home furniture/HomeFurnituresPage'
import ProductBriefPage from './ProductBriefPage'
import ProductDetails from './ProductDetails/ProductDetails'

function Products() {

    return (<>
            <Pagepath path="Products"/>
            <MainCategories/>
            <Switch>
                <Route exact path="/Products">
                    <ProductBriefPage/>
                </Route>
                <Route path="/Products/Daily Essentials">
                    <DailyEssentialPage/>
                </Route>
                <Route path="/Products/Home Furnitures">
                    <HomeFurnituresPage/>
                </Route>
                <Route path="/Products/:storeName/:id" children={<ProductDetails/>}>         
                </Route>
            </Switch>
            </>
    )
}
export default Products
