const Perrito = (props) => {
    return(
    <>
    <div>
    <h2>Nombre: {props.perros.nombre}</h2>
    <ul>
        <li>Edad:{props.perros.edad}</li>
        <li>Sexo:{props.perros.sexo}</li>
        <li>Raza:{props.perros.raza}</li>
        <li>Tamaño:{props.perros.tamanio}</li>
    </ul>
    </div>
    </>)
}

export default Perrito;