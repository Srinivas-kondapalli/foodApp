/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Helmet from '../assets/components/Helmet/Helmet'
import CommonSection from '../assets/components/UI/category/common-section/CommonSection'
import { Col, Row, Container } from 'reactstrap'
import productImg from '../assets/images/product_01.1.jpg'
import '../../src/styles/product-card.css'
import '../styles/product-details.css'
import { useParams } from 'react-router-dom';
import products from '../../src/assets/fake-data/product'
import ProductCard from '../assets/components/UI/category/product-card/ProductCard'
import { useDispatch } from 'react-redux'
import cartSlice from '../store/shoppinh-cart/cartSlice'
const FoodDetails = () => {
  const [tab, setTab] = useState('desc');
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = products.find(product => product.id === id)
  console.log(product)
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] =useState('');
  const [reviewMsg, setReviewMsg] = useState('');
  const { category, desc, price, title ,image01} = product;
  const relatedProduct = products.filter(item => item.category === category)
  const addItem = ()=>{
    console.log("add")
    dispatch(cartSlice.actions.addItem(
      {
      id,
      price, title,image01
    }))
  }
  const submitHandler = (e)=>{
e.prventDefault()
  }
  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])
  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price:<span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addToCart_btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <form className="form"
                   onSubmit={submitHandler}
                  >
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="addToCart_btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails
