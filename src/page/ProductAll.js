import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productsList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/gn030108/H-M-mall/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  // 첫 로딩시 상품정보 받기
  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((item, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
