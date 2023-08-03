import ItemNuestrosServicios from "./item/ItemNuestrosServicios";
import { Row, Container } from "react-bootstrap";

const NuestrosServicios = () => {
  return (
    <Container>
      <h2 className="text-center display-2 mt-3">Nuestros Servicios</h2>
      <Row>
        <ItemNuestrosServicios></ItemNuestrosServicios>
        <ItemNuestrosServicios></ItemNuestrosServicios>
        <ItemNuestrosServicios></ItemNuestrosServicios>
        <ItemNuestrosServicios></ItemNuestrosServicios>
      </Row>
    </Container>
  );
};

export default NuestrosServicios;
