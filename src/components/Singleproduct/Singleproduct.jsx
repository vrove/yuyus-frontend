import React from 'react';
import { useParams } from 'react-router-dom';
import './singleproduct.css';

const Singleproduct = ({ allProductsData, addToCart }) => {
    let id = useParams();
    return (
        <>
            {
                allProductsData.map((product, index) => {
                    if (product.id == id.id) {
                        return (
                            <div className="singleproduct">
                                <div className="singleproduct-left">
                                    <div className="singleproduct-img-list">
                                        <img src={product.img} alt=""/>
                                        <img src={product.img} alt=""/>
                                        <img src={product.img} alt=""/>
                                        <img src={product.img} alt=""/>
                                    </div>
                                    <div className="singleproduct-img">
                                        <img className='singleproduct-main-img' src={product.img} alt="" />
                                    </div>
                                </div>
                                <div className="singleproduct-right">
                                    <h1>{product.name}</h1>
                                    <div className="rate-single">
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <p>(122)</p>
                                    </div>
                                    <div className="singleproduct-right-prices">
                                        <div className="singleproduct-right-discount">{product.discount}%</div>
                                        <div className="singleproduct-right-price-old">Rp {product.price}</div>
                                        <div className="singleproduct-right-price-new">Rp {product.newprice}</div>
                                    </div>
                                    <div className="singleproduct-right-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae autem excepturi quis at animi error nobis repudiandae vitae alias? Tempore.
                                    </div>
                                    <div className='add-f_flex'><button className='add-to-cart' onClick={() => addToCart(product)}>Add To Cart</button></div>
                                    <p className='singleproduct-right-category'><span>Category : </span>Women, Man</p>
                                    <p className='singleproduct-right-category'><span>Tags : </span>Modern, Latest</p>
                                </div>
                            </div>
                        )
                    }
                })

            }
        </>
    )
}
export default Singleproduct;