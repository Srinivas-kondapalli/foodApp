/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Helmet from '../assets/components/Helmet/Helmet'
import CommonSection from '../assets/components/UI/category/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import '../../src/styles/product-card.css'
import '../../src/styles/checkout.css'
import { useSelector } from 'react-redux'
function Checkout() {
  const [enterName,setEnterName] = useState('')
  const [enterEmail,setEnterEmail] = useState('')
  const [enterNumber,setEnterNumber] = useState('')
  const [enterCountry,setEnterCountry] = useState('')
  const [enterCity,setEnterCity] = useState('')
  const [postalCode,setPostalCode] = useState('')
  const { totalAmount:cartTotalAmount } = useSelector(({ cart }) => cart);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost)
const  shippinfInfo = []
const submitHandler = (e)=>{
  e.preventDefault();
  const userShippingAddress = {
    name:enterName,
    email:enterEmail,
    phone:enterNumber,
    country:enterCountry,
    city:enterCity,
    postalCode:postalCode,
  }
  shippinfInfo.push(userShippingAddress)
  console.log(userShippingAddress)
}


  return (
    <Helmet title="Checkout">
    <CommonSection title="Checkout" />
    <section>
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className="mb-4">Shipping Address</h6>
            <form className="checkout__form" onSubmit={submitHandler}>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setEnterName(e.target.value)}
                />
              </div>

              <div className="form__group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEnterEmail(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  type="number"
                  placeholder="Phone number"
                  required
                  onChange={(e) => setEnterNumber(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Country"
                  required
                  onChange={(e) => setEnterCountry(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) => setEnterCity(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  type="number"
                  placeholder="Postal code"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <button type="submit" className="addToCart_btn">
                Payment
              </button>
            </form>
          </Col>

          <Col lg="4" md="6">
            <div className="checkout__bill">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal: <span>${cartTotalAmount}</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping: <span>${shippingCost}</span>
              </h6>
              <div className="checkout__total">
                <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>${totalAmount}</span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Checkout
