import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../../../styles/product-card.css'
import { addItem } from '../../../../../store/shoppinh-cart/cartSlice'
const ProductCard = (props) => {
  console.log("props",props.item)
  const {id,title,image01,price}=props.item
  const obj={
    id:id,
    title:title,
    image01:image01,
    price:price
  }
  console.log("obj",obj)
 const dispatch = useDispatch()
 const addToCart = ()=>{
  dispatch(addItem(obj
   ))
 }
  return (
    <div className='product_item'>
      <div className="product_img">
        <img src={image01} alt="product-img" className='w-50' />
      </div>
      <div className="product_content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between'>
          <span className='produc_price'>${price}</span>
          <button className='addToCart_btn' onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
