import { Container, Row } from "react-bootstrap";
import ItemNuestrosClientes from "./item/ItemNuestrosClientes";

const NuestrosClientes = () => {
  return (
    <Container>
      <h2 className="text-center display-2 mt-3">Nuestros Clientes</h2>
      <Row>
        <ItemNuestrosClientes></ItemNuestrosClientes>
        <ItemNuestrosClientes></ItemNuestrosClientes>
        <ItemNuestrosClientes></ItemNuestrosClientes>
      </Row>
    </Container>
  );
};

export default NuestrosClientes;
