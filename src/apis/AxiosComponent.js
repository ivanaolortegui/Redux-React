import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AxiosComponent = () => {
    const [users, setusers] = useState([])
    const url = 'https://reqres.in/api/users/'
    useEffect(() => {
        axios.get(url)
        .then(resp => setusers(resp.data.data))

     /* fetch(url)
     .then(resp => resp.json())
     .then(result => setusers(result.data))
     .catch(error => {
         //Manejo de error
     }) */
    }, [])

    const handleUsers = (id) => {
        axios.get(url, {
            params: {
                id: id
            }
        })
        .then((result => {
            console.log(result.data.data);
        }))
    /*     fetch(`${url}${id}`)
        .then(resp => resp.json())
        .then(result => console.log(result.data)) */


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

export default AxiosComponent
