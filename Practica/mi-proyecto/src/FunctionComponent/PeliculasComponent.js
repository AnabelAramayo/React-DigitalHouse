import React, {Component} from 'react';

export default function PeliculasComponent (props) {
    return(
        <div key={i}>
            <p>Titulo: {e.titulo}</p>
            <p>Año: {e.anio}</p>
            <p>Director: {e.director}</p>
            <p>Actores: {e.actores}</p>
            <p>Genero: {e.genero}</p>
            <p>Puntaje: {e.puntaje}</p>
        </div>
    )
}