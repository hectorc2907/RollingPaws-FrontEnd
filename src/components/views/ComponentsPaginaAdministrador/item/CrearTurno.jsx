import { Form,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CrearTurno = () => {
    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Nuevo Turno</h1>
            <hr />
            <Form>
                <Form.Group>
                    <Form.Label>Nombre Mascota</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Veterinario</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Detalle de Cita</Form.Label>
                    <Form.Control></Form.Control>
                    <Form.Text></Form.Text>
                </Form.Group>
            </Form>
        </section>
    );
};

export default CrearTurno;