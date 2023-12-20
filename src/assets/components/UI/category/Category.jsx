import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import categoryImg01 from '../../../images/category-01.png'
import categoryImg02 from '../../../images/category-02.png'
import categoryImg03 from '../../../images/category-03.png'
import categoryImg04 from '../../../images/category-04.png'
import '../../../../styles/category.css'

const categoryData = [
    {
        display:'Fastfood',
        imgUrl:categoryImg01
    },
    {
        display:'Pizza',
        imgUrl:categoryImg02
    },
    {
        display:'Asian Food',
        imgUrl:categoryImg03
    },
    {
        display:'Row Meat',
        imgUrl:categoryImg04
    }
]
const Category = () => {
  return (
    <div>
   <Container>
    <Row>
        {categoryData.map((item,index)=>(
 <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
    <div className="category_item d-flex align-items-center gap-3">
        <div className="category_img">
            <img src={item.imgUrl} alt="category_item" />
        </div>
        <h6>{item.display}</h6>
    </div>
 </Col>
        ))}
       
    </Row>
   </Container>
    </div>
  )
}

export default Category
