import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
       
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(22)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">Rs {product.old_price}</div>
            <div className="productdisplay-right-price-new">Rs {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        "Introducing our exquisite Dishes, crafted with care and attention to detail, adorned with subtle flavors that tantalize the taste buds. Elevate your dining experience with this exquisite blend of flavors, a fusion of tradition and innovation that promises to delight every palate."
        </div>
            <div className="productdisplay-right-size">
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            </div>
      </div>
    </div>
  )
}

export default ProductDisplay 