import { Container, Row } from "react-bootstrap";
import ItemNuestrosProfesionales from "./item/ItemNuestrosProfesionales";

const NuestrosProfesionales = () => {
  return (
    <Container>
      <h2>Nuestros Profesionales</h2>
      <Row>
        <ItemNuestrosProfesionales></ItemNuestrosProfesionales>
        <ItemNuestrosProfesionales></ItemNuestrosProfesionales>
        <ItemNuestrosProfesionales></ItemNuestrosProfesionales>
      </Row>
    </Container>
  );
};

export default NuestrosProfesionales;
