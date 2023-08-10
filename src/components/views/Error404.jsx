import React from 'react';
import { Container, Image } from 'react-bootstrap';
import '../../style/Error404.css';
import error404 from '../../assets/error404.png'
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <Container className='text-center py-2' fluid>
        <h1 className='text-light display-1 pt-3'>Error 404</h1>
        <Image src={error404}></Image><br />
        <Link className='px-5 btn' to={"/"}>Volver</Link>
      </Container>
    </>
  );
};

export default Error404;