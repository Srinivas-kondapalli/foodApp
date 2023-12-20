/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useRef } from 'react'
import Helmet from '../assets/components/Helmet/Helmet'
import CommonSection from '../assets/components/UI/category/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import '../../src/styles/product-card.css'
import { Link } from 'react-router-dom'
const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler} aria-autocomplete='off'>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart_btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">
                Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}




export default Register
