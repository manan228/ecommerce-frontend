import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/cardCoreui";
import { CButton } from "@coreui/react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCartProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");

        const retreivedProducts = response.data.map((item) => {
          const productObj = {
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            unitPrice: item.unitPrice,
            quantity: item.cartItem.quantity,
          };

          return productObj;
        });

        setCartProducts(retreivedProducts);
      } catch (err) {
        console.log(err);
      }
    };

    getCartProducts();
  }, []);

  const onCheckoutClickHandler = async () => {
    try {
      await axios.post("http://localhost:3000/create-order");
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
