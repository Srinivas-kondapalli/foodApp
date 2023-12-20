import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import '../../../../../styles/shopping-cart.css'
import { toggle } from '../../../../../store/shoppinh-cart/cartUiSlice'
import { useDispatch,useSelector } from 'react-redux'
const Carts = () => {
  const dispatch= useDispatch()
  const { cartItems,totalAmount } = useSelector(({ cart }) => cart)
  console.log("cartItems",cartItems)
  const toggleCart = ()=>{
    dispatch(toggle())
}
  return (
    <div className='cart_container'>
   <ListGroup className='cart'>
<div className="cart_close" onClick={toggleCart}>
    <span><i class="ri-close-fill"></i></span>
</div>
<div className="cart_item-list">
    

  {
    cartItems.length === 0 ? 
    <h6 className='d-flex justify-content-center mt-4'>no items added to the cart</h6> : cartItems.map((item,index)=>(
      <CartItem item={item}  key={index}/>
    ))
  }



</div>
<div className="cart_bottom d-flex align-items-center justify-content-between">
    <h6>SubTotal : <span>${totalAmount}</span></h6>
    <button><Link to={'/checkout'}>Check out</Link></button>
</div>
   </ListGroup>
    </div>
  )
}

export default Carts
