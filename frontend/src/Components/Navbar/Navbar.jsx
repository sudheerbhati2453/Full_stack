import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo1 from '../Assets/logo1.png';
// import logo2 from '../Assets/logo2.svg';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const navRef = useRef();


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo1} alt="" />
        {/* <p>Apna Zaika</p> */}
      </div>

      <ul ref={navRef} className='nav-menu'> {/* Ref added here */}
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/' className='n1 n2'>HOME</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'className='n1'>PLATTER-PARADISE</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'className='n1'>MUNCH-MOSAIC</Link> {menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'className='n1'>DRINK-DELIGHTS</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>

     

      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> :
          <Link to='/login'><button className='btn1'>Login/Sign-Up</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt=""  className='cart1'/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
