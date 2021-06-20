import React, { useState } from 'react'

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

    // Petición a JSON Placeholder
    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        // console.log(users)
        setEquipo(users)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map( (item) => (
                        <li key={item.id}> {item.name} - {item.email} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros