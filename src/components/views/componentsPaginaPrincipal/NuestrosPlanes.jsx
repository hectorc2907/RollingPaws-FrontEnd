import { Row, Container } from "react-bootstrap";
import ItemNuestrosPlanes from "./item/ItemNuestrosPlanes";

const NuestrosPlanes = () => {
  return (
    <Container>
      <h2 className="text-center display-2">Nuestros Planes</h2>
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
