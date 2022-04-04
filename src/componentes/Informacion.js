import React from "react"
import Comic from "./Comic"
import Serie from "./Serie"

export default function Informacion(props) {

    const comicsItems = props.comics.items.map(item => {
        return (
            <Comic 
              nombre={item.name}
              link={item.resourceURI}
            />
        )
    })

    const seriesItems = props.series.items.map(item => {
        return (
            <Serie 
              nombre={item.name}
              link={item.resourceURI}
            />
        )
    })

    return (
        <div className="informacion">
            <ImageBackground source={props.fondo} style={{width: '100%', height: '100%'}}>
                <Text>Hola que tal</Text>
            </ImageBackground>
            <div className="superheroe">
                <img src={props.fondo} alt="fondo de pantalla"/>
                <h1>{props.nombre}</h1>
            </div>
            <div className="secciones">
                <div className="comics">
                    <h2 className="comics-titulo">COMICS</h2>
                    <p>Comics disponibles: {props.comics.available}</p>
                    {comicsItems}
                </div>
                <div className="series">
                    <h2>SERIES</h2>
                    <p>Series disponibles: {props.series.available}</p>
                    {seriesItems}
                </div>
            </div>
        </div>
    )
}