import Logo from './componentsPaginaPrincipal/Logo';
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
        </>
    );
};

export default PaginaPrincipal;