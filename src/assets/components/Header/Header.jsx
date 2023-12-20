import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'reactstrap'
import logo from '../../images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import '../../../styles/header.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../../store/shoppinh-cart/cartUiSlice'

const nav_links = [
    {
        Display: 'Home',
        path: '/home'
    },
    {
        Display: 'Foods',
        path: '/foods'
    },
    {
        Display: 'Cart',
        path: '/cart'
    },
    {
        Display: 'Contact',
        path: '/contact'
    },
]
function Header() {
    const menuRef = useRef(null)
    const headerRef = useRef(null)

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
    const { totalQuantity } = useSelector(({ cart }) => cart)
    console.log(totalQuantity);
    const dispatch= useDispatch()

    const [sticky, setSticky] = useState(false);
const toggleCart = ()=>{
    dispatch(toggle())
}
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`header ${sticky ? "header_shrink" : ""}`}>
                <Container>
                    <div className="nav_wrapper d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <h5>Tasty Treat</h5>
                        </div>
                        {/* ========menu-items==== */}

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu d-flex align-items-center gap-5">
                                {nav_links.map((item, index) => (
                                    <NavLink to={item.path} key={index}
                                        className={navClass => navClass.isActive ? 'active_menu' : ""}
                                    >{item.Display}</NavLink>
                                ))}
                            </div>
                        </div>
                        {/* ====nav_right icons==== */}
                        <div className="nav_right d-flex align-items-center gap-4">
                            <span className="car_icon" onClick={toggleCart}>
                                <i class="ri-shopping-basket-line"></i>
                                <span className="cart_badge">{totalQuantity}</span>
                            </span>
                            <spam className="user">
                                <Link to='/login'><i class="ri-user-line"></i></Link>
                            </spam>
                            <div className="mobile_menu"
                                onClick={toggleMenu}
                            >
                                <i class="ri-menu-line"></i>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Header
