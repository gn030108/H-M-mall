import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const goProductDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="card_Box" onClick={goProductDetail}>
      <div className="card_center">
        <img src={item?.img} alt="img" />
        <div>{item?.choice === true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
