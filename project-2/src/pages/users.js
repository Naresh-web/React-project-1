import React, { useEffect } from 'react'
import Layout from '../components/layout';
import { api } from '../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const router = useNavigate();

    const fetchUsersById = async (id) =>{
        router(`/userDetails/${id}`)
    }

    const fetchUsers = async () => {
        const userData = await api('https://api.escuelajs.co/api/v1/users')
        if(userData){
            setUsers(userData);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, [])
  return (
    <>
      <Layout>
          <div className="usersPage container">
                <h2>Users</h2>
                <ul>
                {
                    users.length === 0 ? (<p>Loading...</p>) : (
                        users.map((item) => {
                        const {avatar, name, email, id} = item;
                        return <>
                            <li key={id} onClick={() => fetchUsersById(id)}>
                                <img src={avatar} alt="" />
                                <div className='userContent'>
                                    <p>{name}</p>
                                    <p>{email}</p>
                                </div>
                            </li>
                        </>
                })
                )
                }
            </ul>
          </div>
      </Layout>
    </>
  )
}

export default Users;