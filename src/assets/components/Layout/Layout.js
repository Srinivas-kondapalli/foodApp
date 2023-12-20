import React from 'react'
import { useSelector } from 'react-redux'
import Routers from '../../routes/Routers'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Carts from '../UI/category/cart/Carts'

const Layout = () => {
  const { cartIsVisble } = useSelector(({ cartUi }) => cartUi)
  return (
    <div>
    <Header/>
    {cartIsVisble &&     <Carts/>
}
    <div>
        <Routers/>
    </div>
    <Footer/>
    </div>
  )
}

export default Layout
