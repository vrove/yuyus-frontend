// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ProductDetails.css'
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDetails = (props) => {
    const {product} = props;
  return (
    <div className='productdetails'>
      <div className='productdetails-left'>
        <div className='productdetails-img-list'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className='productdetails-img'>
          <img className='productdetails-main-img' src={product.image} />
        </div>
      </div>
      <div className='productdetails-right'>
        <h1>{product.name}</h1>
        <div className="productdetails-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdetails-right-prices">
          <div className="productdetails-right-price-old">${product.old_price}</div>
          <div className="productdetails-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdetails-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero molestiae repudiandae corporis enim delectus numquam. Nihil alias ipsam cupiditate, aut enim asperiores aliquid nemo tempore beatae, odit ratione voluptate.
        </div>
        <div className="productdetails-right-siz">
          <h1>Select Size</h1>
          <div className="productdetials-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <p className='productdetails-right-category'><span>Category :</span>Women, T-shirt</p>
          <p className='productdetails-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;