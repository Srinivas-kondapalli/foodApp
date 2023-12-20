import React, { useEffect, useState } from 'react'
import Helmet from '../../src/assets/components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import heroimg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import { Link } from 'react-router-dom'
import Category from '../assets/components/UI/category/Category'
import '../styles/home.css'
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import products from '../assets/fake-data/product.js'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import ProductCard from '../assets/components/UI/category/product-card/ProductCard'
import whyImg from '../assets/images/location.png'
import networkImg from '../assets/images/network.png'
import TestimonialSlider from '../assets/components/UI/category/slider/TestimonialSlider'
const featureData = [

  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint.'
  },
  {
    title: 'Quick Delivery',
    imgUrl: featureImg02,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint.'
  },
  {
    title: 'Quick Delivery',
    imgUrl: featureImg03,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint.'
  },
]

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allproducts, setAllproducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([])
  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])
  useEffect(() => {
    if (category === 'ALL') {
      setAllproducts(products)
    }
    if (category === 'BURGER') {
      const filterdProducts = products.filter(item => item.category === 'Burger')
      setAllproducts(filterdProducts)
    }
    if (category === 'PIZZA') {
      const filterdProducts = products.filter(item => item.category === 'Pizza')
      setAllproducts(filterdProducts)
    }
    if (category === 'BREAD') {
      const filterdProducts = products.filter(item => item.category === 'Bread')
      setAllproducts(filterdProducts)
    }
  }, [category])
  return (
    <div>
      <Helmet title="Home">
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero_content">
                  <h5 className='mb-3'>easy way to make an order</h5>
                  <h1 className='mb-4 hero_title'><span>HUNGRY?</span>just wait food at<span> your door </span></h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eveniet dolorum atque ex ducimus ad assumenda dolores ullam? Beatae veritatis eum quod velit quas, nemo asperiores voluptate aut accusamus provident!</p>
                  <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                    <button className='order_btn d-flex align-items-center justify-content-between'>Order now<i class="ri-arrow-right-s-line"></i></button>
                    <button className='all_foods-btn'><Link to='/foods'>See all foods</Link></button>
                  </div>
                  <div className=' hero_service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'>
                      <span className='shipping_icon'>
                        <i class="ri-car-line"></i>No shipping charge
                      </span>
                    </p>
                    <p className='d-flex align-items-center gap-2'>
                      <span className='shipping_icon'>
                        <i class="ri-shield-check-line"></i>100% Secure checkout
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="hero_img">
                  <img src={heroimg} alt="hero_img" className='w-100' />

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='pt-0'>
          <Category />
        </section>
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h5 className='feature_subtitle mb-4'>What we serve</h5>
                <h2 className='feature_title'>Just sit back at home</h2>
                <h2 className='feature_title'>We will <span>take care</span></h2>
                <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur repellendus officiis qui </p>
                <p className='feature_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, repudiandae.{""}</p>
              </Col>
              {featureData.map((item, index) => (
                <Col lg='4' md='6'  sm="6" key={index} className='mt-5'>
                  <div className="feature_item text-center px-5 py-3">
                    <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3' />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}


            </Row>
          </Container>
        </section>
        <section>
          <Container> 
            <Row>
              <Col lg='12' className='text-center'>
                <h2>Popular foods</h2>
              </Col>
              <Col lg='12'>
                <div className="food_category d-flex align-items-center justify-content-center gap-4">
                  <button
                    className={`all_btn ${category === "ALL" ? 'foodBtnActive' : ""}`}
                    onClick={() => {
                      setCategory('ALL')
                    }}>All</button>
                  <button
                    className={`d-flex align-items-center gap-2 ${category === "BURGER" ? 'foodBtnActive' : ""}`}
                    onClick={() => {
                      setCategory('BURGER')
                    }}><img src={foodCategoryImg01} alt="" />Burger</button>
                  <button
                    className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? 'foodBtnActive' : ""}`}
                    onClick={() => {
                      setCategory('PIZZA')
                    }}><img src={foodCategoryImg02} alt="" />Pizza</button>
                  <button
                    className={`d-flex align-items-center gap-2 ${category === "BREAD" ? 'foodBtnActive' : ""}`}
                    onClick={() => {
                      setCategory('BREAD')
                    }}><img src={foodCategoryImg03} alt="" />Bread</button>
                </div>
              </Col>
              {allproducts.map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              ))}

            </Row>
          </Container>
        </section>
        <section className='why_choose-us'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <img src={whyImg} alt="why-tasty-treat" className='w-100' />
              </Col>
              <Col lg='6' md='6'>
                <div className="why_tasty-treat">
                  <h2 className='tasty_treat-title mb-4'>why <span>Tasty Treat?</span></h2>
                  <p className='tasty_treat-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, veritatis?</p>
                  <ListGroup className='mt-4'>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className=' choose_us-title d-flex align-items-center gap-2'> <i class="ri-checkbox-circle-line"></i>Fresh and Tasty foods</p>
                      <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, amet.</p>
                    </ListGroupItem >
                    <ListGroupItem className='border-0 ps-0'>
                      <p className='choose_us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Quality Support  </p>
                      <p className='choose_us-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, itaque!</p>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 ps-0'>
                      <p className=' choose_us-title  d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Order from any location </p>
                      <p className='choose_us-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, itaque!</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2>Hot Pizza</h2>
              </Col>
              {hotPizza.map((item => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              )))}
            </Row>
          </Container>
        </section>
        <section >
          <Container>
            <Row>
             
              <Col lg='6' md='6' >
              <div>
                <h5 className='testimonial_subtitle mb-4'>Testimonial</h5>
                <h2  className='testimonial_title mb-4'>What our <span>Customers</span> are saying</h2>
                <p className='testimonial_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, amet!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, amet!</p>
                <TestimonialSlider/>
              </div>
              </Col>
              <Col lg='6' md='6' >
              <img src={networkImg} alt="testimanial-img" className='w-100' />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}

export default Home
