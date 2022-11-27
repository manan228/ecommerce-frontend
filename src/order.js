import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card/cardCoreui";

const Order = () => {
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");

        const retreivedProducts =
          response.data[response.data.length - 1].products;

        const orderObj = {
          id: retreivedProducts[0].id,
          imageUrl: retreivedProducts[0].imageUrl,
          name: retreivedProducts[0].name,
          unitPrice: retreivedProducts[0].unitPrice,
          quantity: retreivedProducts[0].orderItem.quantity,
        };

        setOrderProducts([orderObj]);
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, []);
  return (
    <>
      <Card products={orderProducts} />
    </>
  );
};

export default Order;
