import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailsById } from "../services/api";

const UserDetails = () =>{
    const params = useParams();
    const [userData, setUserData] = useState({});

    const fetchUserDetails = async () => {
        const resp = await fetchDetailsById(params.id)
        if(resp){
        setUserData(resp);
        }
    }
    useEffect(() => {
        fetchUserDetails();
    }, [])
    return (
        <>
            <div><img src={userData.avatar} alt="" /></div>
            <div>{userData.email}</div>
        </>
    )
}
 export default UserDetails;