import React from 'react'
import { ListGroupItem } from 'reactstrap'

import '../../../../../styles/cart-item.css'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem, removeItem } from '../../../../../store/shoppinh-cart/cartSlice'
const CartItem = ({item}) => {
    const {id,title,price,image01,quantity,totalPrice}=item;
    const dispatch= useDispatch()
    const obj={
        id:id,
        title:title,
        image01:image01,
        price:price
      }
    const incrementItem = ()=>{
        dispatch(addItem(obj
         ))
       }
       const decrementItem = ()=>{
        dispatch(removeItem(id
         ))
       }
       const deleteCartItem = ()=>{
        dispatch(deleteItem(id
         ))
       }
    console.log(item,"data")
    return (
        <div>
            <ListGroupItem className='border-0 cart_item'>
                <div className="cart_item-info d-flex gap-2">
                    <img src={image01} alt="product-img" />
                    <div className="cart_product-info d-flex align-items-center w-100 justify-content-between gap-4">
                        <div>
                            <h6 className='cart_product-title'>{title}</h6>
                            <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity} <span>{totalPrice}</span></p>
                            <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                            <span className='decrease_btn' onClick={decrementItem}><i class="ri-subtract-line"></i></span>
                                <span className='quantity'>{quantity}</span>
                                <span className='increase_btn' onClick={incrementItem}><i class="ri-add-line"></i></span>
                               
                            </div>
                        </div>
                        <span className='delete_btn' onClick={deleteCartItem}><i class="ri-close-line"></i></span>
                    </div>
                </div>
            </ListGroupItem>
        </div>
    )
}

export default CartItem
