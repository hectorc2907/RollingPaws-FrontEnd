import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import '../../style/Error404.css';
const Error404 = () => {
  return (
    <>
      <Container className='text-center py-2' fluid>
        <h1 className='text-light display-1 pt-3'>Error 404</h1>
        <Image src='../../assets/error404.png'></Image><br />
        <Button className='px-5'>Volver</Button>
      </Container>
    </>
  );
};

export default Error404;