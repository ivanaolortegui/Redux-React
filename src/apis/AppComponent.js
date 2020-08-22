import React, { useEffect, useState } from 'react'

const AppComponent = () => {
    const [users, setusers] = useState([])
    const url = 'https://reqres.in/api/users/'
    useEffect(() => {
     fetch(url)
     .then(resp => resp.json())
     .then(result => setusers(result.data))
     .catch(error => {
         //Manejo de error
     })
    }, [])

    const handleUsers = (id) => {
        fetch(`${url}${id}`)
        .then(resp => resp.json())
        .then(result => console.log(result.data))
    }
    return (
        <div>
            <ul>
                {
                    users.map(user => 
                        <li className="list-group-item" key={user.id}>
                            <div>{user.first_name}</div>
                            <button 
                            className="btn btn-primary"
                            onClick={(()=> handleUsers(user.id))}
                            >ver usuario</button>
                        </li>
                        )
                }
            </ul>
        </div>
    )
}

export default AppComponent
