async function ListarVideos() {
    const conexion = await fetch("http://localhost:3000/videos");
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

export default ListarVideos();