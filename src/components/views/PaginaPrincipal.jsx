import Logo from './componentsPaginaPrincipal/Logo';
import NuestrosClientes from './componentsPaginaPrincipal/NuestrosClientes';
import NuestrosPlanes from './componentsPaginaPrincipal/NuestrosPlanes';
import NuestrosProfesionales from './componentsPaginaPrincipal/NuestrosProfesionales';
import NuestrosServicios from './componentsPaginaPrincipal/NuestrosServicios';

const PaginaPrincipal = () => {
    return (
        <>
            <Logo></Logo>
            <NuestrosPlanes></NuestrosPlanes>
            <NuestrosServicios></NuestrosServicios>
            <NuestrosProfesionales></NuestrosProfesionales>
            <NuestrosClientes></NuestrosClientes>
        </>
    );
};

export default PaginaPrincipal;