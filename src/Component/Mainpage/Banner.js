import React from 'react'
import { Link } from 'react-router-dom'
import Carousel1 from './Images/carousel1.jpg'
import Carousel2 from './Images/carousel2.jpg'
import Carousel3 from './Images/carousel3.jpg'

const bannerItems = [
    {id:1, link:'Products', image:Carousel1, desc:`Chekout our store`, button:"Shop now"},
    {id:2, link:'Products/Daily Essentials', image:Carousel2, desc:`Daily essentials for you`, button:"Explore"},
    {id:3, link:'Products/Home Furnitures', image:Carousel3, desc:'Explore wide range of furnitures', button:"Explore"}
]

function Banner() {
    return (
        <div className='image-bannner-container'>
            {
                bannerItems.map((item)=>{
                    const {id, link, image,button,desc} = item
                    return (
                        <div className="image-banner" key={id}>
                            <div className="banner-inner">
                                <h1>{desc}</h1>
                                <Link to={link} className="banner-btn">{button}</Link>
                            </div>
                            <img src={image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Banner
