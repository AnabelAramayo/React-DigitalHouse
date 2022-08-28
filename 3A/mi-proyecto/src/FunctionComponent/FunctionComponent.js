import React from 'react';

export default function FunctionComponent(props) {
    let oneByOne = props.data.map(e=>{
    return(
        <section>
        <div>
            <h2>Nombre: {e.Nombre}</h2>
            <ul>
                <li>Edad: {e.Edad}</li>
                <li>Sexo: {e.Sexo}</li>
                <li>Raza: {e.Raza}</li>
                <li>Tamaño: {e.Tamanio}</li>
            </ul>
        </div>
        </section>
    )
})

return( 
    <>
        {oneByOne}
    </>
)
}
