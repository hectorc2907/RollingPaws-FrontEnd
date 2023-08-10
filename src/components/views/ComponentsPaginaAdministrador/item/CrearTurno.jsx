import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearTurno } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const CrearTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const fechaConsulta = watch("fechaConsulta");
  const horaConsulta = watch("horaConsulta");
  const detalleConsulta = watch("detalleConsulta");

  const onSubmit = (turnoNuevo) => {
    turnoNuevo.fechaConsulta = fechaConsulta;
    turnoNuevo.horaConsulta = horaConsulta;
    turnoNuevo.detalleConsulta = detalleConsulta;
    crearTurno(turnoNuevo).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Turno Generado",
          `El turno para ${turnoNuevo.nombreMascota} fue creado`,
          "success"
        );
        reset();
      } else {
        Swal.fire("Ocurrio un Error", `No se pudo generar el Turno`, "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo Turno</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreMascota">
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Nombre de la Mascota"
            {...register("nombreMascota", {
              required: "Debe ingresar el Nombre de la Mascota",
              pattern: {
                value: /^[A-Za-z\s]{2,20}$/g,
                message:
                  "El nombre debe contener solo letras o espacios, ademas debe contener entre 2 y 20 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.nombreMascota?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreVeterinario">
          <Form.Label>Veterinario</Form.Label>
          <Form.Select
            {...register("nombreVeterinario", {
              required: "Debe Seleccionar una opcion valida",
              pattern: {
                value: "veterinario_1" || "veterinario_2" || "veterinario_3",
                message: "La opcion seleccionada no es correcta",
              },
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="veterinario_1">Veterinario 1</option>
            <option value="veterinario_2">Veterinario 2</option>
            <option value="veterinario_3">Veterinario 3</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.nombreVeterinario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFechaConsulta">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            {...register("fechaConsulta", {
              required: "Debe seleccionar una fecha",
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.fechaConsulta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHoraConsulta">
          <Form.Label>Hora</Form.Label>
          <Form.Select
            {...register("horaConsulta", {
              required: "Debe seleccionar una opcion valida",
              pattern: {
                value:
                  "08:00" ||
                  "08:30" ||
                  "09:00" ||
                  "09:30" ||
                  "10:00" ||
                  "10:30" ||
                  "11:00" ||
                  "11:30",
                message: "La opcion seleccionada no es correcta",
              },
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.horaConsulta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDetalleConsulta">
          <Form.Label>Detalle de Cita</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            {...register("detalleConsulta", {
              required: "Debe ingresar el detalle de la cita",
              pattern: {
                value: /^[A-Za-z0-9\s]{2,5000}$/g,
                message:
                  "El detalle debe contener letras, numeros y espacios, ademas debe contener entre 2 y 5000 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.detalleConsulta?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Generar
        </Button>
        <Link className="btn btn-warning ms-3" to={"/administrador"}>
          Volver
        </Link>
      </Form>
    </section>
  );
};

export default CrearTurno;
