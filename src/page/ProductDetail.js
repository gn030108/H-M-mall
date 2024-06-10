import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {

  let {id} = useParams()

  const [product, setProduct] = useState(null);

  const getProductDetail = async ()=>{
    let url = `https://my-json-server.typicode.com/gn030108/H-M-mall/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setProduct(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product_img'><img src={product?.img}/></Col>
        <Col className='detail_text'>
          <div style={{fontSize:'1.2rem'}}>{product?.title}</div>
          <div style={{fontSize:'1.5rem',fontWeight:'500'}}>₩{product?.price}</div>
          <div style={{fontSize:'1.2rem'}}>{product?.choice === true? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle style={{backgroundColor:'white', color:'black', border:'1px solid black'}} id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.map((item, index)=>(
                <Dropdown.Item key={index}>{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <button className='detail_btn'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail