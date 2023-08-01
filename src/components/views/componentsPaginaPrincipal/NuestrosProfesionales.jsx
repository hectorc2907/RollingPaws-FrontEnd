import { Container, Row } from "react-bootstrap";
import ItemNuestrosProfesionales from "./item/ItemNuestrosProfesionales";

const NuestrosProfesionales = () => {
  return (
    <Container>
      <h2 className="text-center display-2 mt-3">Nuestros Profesionales</h2>
      <Row className="justify-content-center">
        <ItemNuestrosProfesionales></ItemNuestrosProfesionales>
        <ItemNuestrosProfesionales></ItemNuestrosProfesionales>
        <ItemNuestrosProfesionales></ItemNuestrosProfesionales>
      </Row>
    </Container>
  );
};

export default NuestrosProfesionales;