/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Helmet from "../assets/components/Helmet/Helmet";
import CommonSection from "../assets/components/UI/category/common-section/CommonSection";
import { Col, Row, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cart-page.css";
import cartSlice from "../store/shoppinh-cart/cartSlice";
import { Link } from "react-router-dom";
import "../../src/styles/product-card.css";
const Cart = () => {
  const { cartItems, totalAmount } = useSelector(({ cart }) => cart);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your Cart is Empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  SubTotal: $
                  <span className="cart_subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart_page-btn">
                  <button className="addToCart_btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart_btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartSlice.actions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart_img-box">
        <img src={image01} />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart_item-delete">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};
export default Cart;
