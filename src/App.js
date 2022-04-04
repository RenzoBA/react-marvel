import React from "react"
import Personaje from "./componentes/Personaje"
import Informacion from "./componentes/Informacion"

export default function App() {

  const [allData, setAllData] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      const res = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4bf7c617fe640d4e7bc6a1778a86548e&hash=c8f51f375b64058e3b3543d6ee2a443b")
      const marvel = await res.json()
      setAllData(marvel.data.results.map(element => {
        return {
          ...element, 
          isHeld: false,
        }
      }))
    }
    getData()
    return() => {
      
    }
  },[])

  const personajes = allData.map(data => {
    return (
      <Personaje 
        fotoSmall={`${data.thumbnail.path}/standard_medium.${data.thumbnail.extension}`}
        nombre={data.name}
        key={data.id}
        select={()=>isSelected(data.id)}
      />
    )
  })

  const informaciones = allData.map(data => {
    return (data.isHeld) && (
      <Informacion
        fondo={`${data.thumbnail.path}/landscape_incredible.${data.thumbnail.extension}`}
        nombre={data.name}
        descripcion={data.description}
        comics={data.comics}
        series={data.series}
        key={data.id}
      />
    )
  })

  function isSelected(id) {
    setAllData(prevAllData => prevAllData.map(prevData => {
      return (prevData.id === id) ? {
        ...prevData,
        isHeld: true,
      } : {
        ...prevData,
        isHeld: false,
      }
      }) 
    )
  }

  return (
    <div>
      <div className="cabecera">
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.heroesonline.com%2Fimages%2Fblog%2Fimages%2Fmarvel-logo_box-red.gif&f=1&nofb=1" 
          className="logo"
        />
      </div>
      <div className="personajes">
        {personajes}
      </div>
      <div className="informaciones">
        {informaciones}
      </div>
    </div>
  )
}