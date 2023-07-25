const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const iniciarSesion = async (usuario)=>{
    try {
        const respuesta = await fetch(URL_usuario);
        const listausuarios = await respuesta.json();
        const usuarioBuscado = listausuarios.find((itemUsuario)=> itemUsuario.email === usuario.email)
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }
            else{
                console.log('La contraseña es incorrecta')
                return null;
            }
        } else{
            console.lolg('El mail no existe')
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}