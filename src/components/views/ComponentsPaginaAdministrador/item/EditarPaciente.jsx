import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { editarPaciente, obtenerPaciente } from "../../../helpers/queries";

const EditarPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navegacion = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    obtenerPaciente(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreMascota", respuesta.nombreMascota);
        setValue("especieMascota", respuesta.especieMascota);
        setValue("razaMascota", respuesta.razaMascota);
        setValue("nombreDuenio", respuesta.nombreDuenio);
        setValue("apellidoDuenio", respuesta.apellidoDuenio);
        setValue("emailDuenio", respuesta.emailDuenio);
        setValue("telefonoDuenio", respuesta.telefonoDuenio);
        setValue("direccionDuenio", respuesta.direccionDuenio);
      }
    });
  }, []);

  const onSubmit = (pacienteEditado) => {
    editarPaciente(pacienteEditado, id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Paciente Editado",
          `El paciente ${pacienteEditado.nombreMascota} fue editado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un Error",
          `El paciente ${pacienteEditado.nombreMascota} NO fue editado correctamente`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Paciente</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreMascota">
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la Mascota"
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
        <Form.Group className="mb-3" controlId="formEspecieMascota">
          <Form.Label>Especie Mascota</Form.Label>
          <Form.Select
            {...register("especieMascota", {
              required: "Debe seleccionar una opcion valida",
              pattern: {
                value: "perro" || "gato" || "ave" || "roedor" || "otro",
                message: "La opcion seleccionada no es correcta",
              },
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Roedor">Roedor</option>
            <option value="Otro">Otros</option>
          </Form.Select>
          <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRazaMascota">
          <Form.Label>Raza Mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la raza de la mascota"
            {...register("razaMascota", {
              required: "Debe ingresar la raza de la mascota",
              pattern: {
                value: /^[A-Za-z\s]{2,20}$/g,
                message:
                  "La raza debe contener solo letras entre 2 y 20 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.razaMascota?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreDuenio">
          <Form.Label>Nombre Dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del dueño"
            {...register("nombreDuenio", {
              required: "Debe ingresar el nombre del dueño",
              pattern: {
                value: /^[A-Za-z\s]{2,30}$/g,
                message:
                  "El nombre debe contener solo letras o espacios, ademas debe contener entre 2 y 30 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.nombreDuenio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Apellido Dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el apellido del dueño"
            {...register("apellidoDuenio", {
              required: "Debe ingresar el apellido del dueño",
              pattern: {
                value: /^[A-Za-z\s]{2,30}$/g,
                message:
                  "El apellido debe contener solo letras o espacios, ademas debe contener entre 2 y 30 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.apellidoDuenio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Email Dueño</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese el correo electronico"
            {...register("emailDuenio", {
              required: "Debe ingresar el correo del dueño",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]{2,30}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "El correo debe contener un formato example@example.ex",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.emailDuenio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Telefono Dueño</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el numero del dueño"
            {...register("telefonoDuenio", {
              required: "Debe ingresar el numero del dueño",
              pattern: {
                value: /^(?=\d{10,10}$)\d+$/,
                message: "El campo debe contener los 10 digitos de su contacto",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.numeroDuenio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Direccion Dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la direccion del dueño"
            {...register("direccionDuenio", {
              required: "Debe ingresar la direccion del dueño",
              pattern: {
                value: /^[A-Za-z0-9\s]{2,40}$/g,
                message:
                  "La direccion debe contener letras y numeros hasta 40 caracteres maximo",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.direccionDuenio?.message}
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

export default EditarPaciente;
