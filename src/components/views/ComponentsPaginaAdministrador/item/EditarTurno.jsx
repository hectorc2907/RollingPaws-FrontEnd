import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { editarTurno, obtenerTurno } from "../../../helpers/queries";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const EditarTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navegacion = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    obtenerTurno(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreMascota", respuesta.nombreMascota);
        setValue("nombreVeterinario", respuesta.nombreVeterinario);
        setValue("fechaConsulta", respuesta.fechaConsulta);
        setValue("horaConsulta", respuesta.horaConsulta);
        setValue("detalleConsulta", respuesta.detalleConsulta);
      }
    });
  }, []);

  const onSubmit = (turnoEditado) => {
    editarTurno(turnoEditado, id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Turno Editado",
          `El turno de ${turnoEditado.nombreMascota} fue editado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un Error",
          `El turno de ${turnoEditado.nombreMascota} NO fue editado correctamente`,
          "error"
        );
      }
    });
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Turno</h1>
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
                value: "Dra Michi Fuz" || "Dr Dober Mann" || "Dr Juan Cann Ario",
                message: "La opcion seleccionada no es correcta",
              },
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Dra Michi Fuz">Dra Michi Fuz</option>
            <option value="Dr Dober Mann">Dr Dober Mann</option>
            <option value="Dr Juan Cann Ario">Dr Juan Cann Ario</option>
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
          Guardar Cambios
        </Button>
        <Link className="btn btn-warning ms-3" to={"/administrador"}>
          Volver
        </Link>
      </Form>
    </section>
  );
};

export default EditarTurno;
