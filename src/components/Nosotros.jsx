import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {

    // const datos = [
    //     {id: 1, nombre: 'React'},
    //     {id: 2, nombre: 'Angular'},
    //     {id: 3, nombre: 'Vue js'}
    // ]

    const [equipo, setEquipo] = useState([])

    React.useEffect(() => {

        // console.log('UseEffect')
        // setEquipo(datos)

        obtenerDatos()
    }, [])

    // Petición a Age of Empire 2
    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        // console.log(users)
        setEquipo(users.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map( (item) => (
                        <li key={item.id}> 
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion} 
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros