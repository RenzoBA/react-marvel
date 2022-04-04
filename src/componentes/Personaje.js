import React from "react"

export default function Personaje(props) {
    
    return (
        <div className="personaje" onClick={props.select}>
            <img 
                src={props.fotoSmall}
                className="personaje-fotoSmall"
                />
            <h3 className="personaje-nombre">{props.nombre}</h3>
        </div>
    )
}
