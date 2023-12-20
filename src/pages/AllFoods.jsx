import React, { useState } from 'react'
  import CommonSection from '../assets/components/UI/category/common-section/CommonSection';
import Helmet from '../assets/components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import products from '../assets/fake-data/product';
import ProductCard from '../assets/components/UI/category/product-card/ProductCard'
import  '../styles/allfoods.css'
import  '../styles/pagination.css'
import ReactPaginate from 'react-paginate';
const AllFoods = () => {
  const [searcTerm,setSearchTerm]= useState('')
const [pagenumber,setpageNumber] = useState(0)
const searchProduct = products?.filter((item)=>{
  if(searcTerm == '') return item;
  if(item.title
    .toLowerCase()
    .includes(searcTerm.toLowerCase()))
    return item;})
const productPerPage = 12;
const visitedpage = pagenumber * productPerPage;
const displayPage = searchProduct.slice(visitedpage, visitedpage+productPerPage);
const pageCount =Math.ceil(searchProduct.length/productPerPage);
const changePage = ({selected})=>{
setpageNumber(selected)
}
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods"/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="search_widget">
                <input type='text' 
                placeholder="I'm looking for...."
                value={searcTerm}
                onChange={e=>setSearchTerm(e.target.value)}
                />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' className='mb-4'>
              <div className="sorting_widget text-end">
                <select className='w-50'>
                  <option>Deafult</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {
              
                displayPage.map((item) =>(
                <Col lg='3' md='4' sm='6' xs="6"key={item.id} className='mb-4'>
                  {" "}
              <ProductCard item={item} />
              </Col>
              ))
            }
            <div>
              <ReactPaginate
               pageCount={pageCount} 
               onPageChange={changePage}
               previousLabel='Prev'
               nextLabel="Next"
               containerClassName='paginationBtns'
               />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods
