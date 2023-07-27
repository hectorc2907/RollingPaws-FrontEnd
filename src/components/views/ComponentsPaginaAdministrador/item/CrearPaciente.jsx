import { Form,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CrearPaciente = () => {
    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Nuevo Paciente</h1>
            <hr />
            <Form>
                <Form.Group>
                    <Form.Label>Nombre Mascota</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Especie Mascota</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Raza Mascota</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre Dueño</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido Dueño</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Dueño</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefono Dueño</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Direccion Dueño</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
            </Form>
        </section>
    );
};

export default CrearPaciente;