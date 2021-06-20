import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    // Se utiliza este Hook para obtener los parametros que se pasen por la URL
    // console.log(useParams())
    const {id} = useParams()
    console.log(id)

    const [pueblo, setPueblo] = useState([])

    React.useEffect(() => {
        // Petición a Age of Empire 2
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            // console.log(users)
            setPueblo(users)
        }
        obtenerDatos()
    }, [id])

    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default User
