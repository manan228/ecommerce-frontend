import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card/cardCoreui";

const Order = () => {
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("https://cors-everywhere.herokuapp.com/http://54.167.109.212:3000/orders");

        console.log(response);

        setOrderProducts(response.data[0].products);
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
