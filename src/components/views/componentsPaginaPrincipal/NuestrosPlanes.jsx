import { Row, Container } from "react-bootstrap";
import ItemNuestrosPlanes from "./ItemNuestrosPlanes";

const NuestrosPlanes = () => {
  return (
    <Container>
      <h2>Nuestros Planes</h2>
      <Row>
        <ItemNuestrosPlanes></ItemNuestrosPlanes>
        <ItemNuestrosPlanes></ItemNuestrosPlanes>
        <ItemNuestrosPlanes></ItemNuestrosPlanes>
        <ItemNuestrosPlanes></ItemNuestrosPlanes>
      </Row>
    </Container>
  );
};

export default NuestrosPlanes;
