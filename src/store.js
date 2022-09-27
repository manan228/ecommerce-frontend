import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/cardCoreui";
import Pagination from "./Pagination/pagination";
import { useLocation } from "react-router-dom";

let paginationData = {};

const Store = () => {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `http://http://54.167.109.212:3000//products/?page=${page}`
        );

        console.log(response);
        paginationData = response.data.paginationData;
        setProducts(response.data.response);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [page]);

  return (
    <>
      <Card products={products} />
      <Pagination paginationData={paginationData} />
    </>
  );
};

export default Store;
