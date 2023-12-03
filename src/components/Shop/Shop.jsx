import React from 'react';
import Shopcart from './Shopcart';
import {Link} from "react-router-dom";
import './shop.css';


const Shop = ({shopItems, addToCart}) => {
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                <div className="contentWidth">
                <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <h2>Mobile Phones</h2>
                        </div>
                        <div className="heading-right row">
                            <span><Link to="/all-products">View All</Link></span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <div className="product-content grid2">
                        <Shopcart shopItems={shopItems} addToCart={addToCart}/>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Shop