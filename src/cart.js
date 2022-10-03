import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/cardCoreui";
import { CButton } from "@coreui/react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCartProducts = async () => {
      try {
        const response = await axios.get("https://cors-everywhere.herokuapp.com/http://54.242.9.172:3000/cart");
        console.log(response.data);
        setCartProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getCartProducts();
  }, []);

  const onCheckoutClickHandler = async () => {
    try {

      const response = await axios.post("https://cors-everywhere.herokuapp.com/http://54.242.9.172:3000/create-order")

      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Card products={cartProducts} />
      {cartProducts.length !== 0 ? (
        <CButton color="primary" onClick={onCheckoutClickHandler}>
          CheckOut
        </CButton>
      ) : null}
    </div>
  );
};

export default Cart;
