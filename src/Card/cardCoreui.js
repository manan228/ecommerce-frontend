import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Card = ({ products }) => {
  const location = useLocation();

  const onAddToCartClickHandler = async (prodId) => {
    try {
      const response = await axios.post(`https://54.167.109.212:3000/cart/${prodId}`);

      console.log(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {products.map((product) => {
        return (
          <CCard style={{ width: "18rem" }} key={product.id}>
            <CCardImage orientation="top" src={product.imageUrl} />
            <CCardBody>
              <CCardTitle>{product.name}</CCardTitle>
              <CCardText>Quantity: {product.quantity}</CCardText>
              <CCardText>Price: {product.unitPrice}</CCardText>
              {location.pathname === `/store/` ? (
                <CButton
                  color="primary"
                  onClick={() => onAddToCartClickHandler(product.id)}
                >
                  Add To Cart
                </CButton>
              ) : null}
            </CCardBody>
          </CCard>
        );
      })}
    </div>
  );
};

export default Card;
