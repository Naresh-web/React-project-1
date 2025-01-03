import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
            <div className="userDetails container">
                <div className="detailsCard">
                    <div className="imgArea">
                    <img src={userData.avatar} alt="" />
                    </div>
                    <div className="contentArea">
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Role: {userData.role}</p>
                    </div>
                </div>

            <Link to='/users'>
                <button className="button-grey-tprnt">Back to Users page</button>
            </Link>
            </div>
        </>
    )
}
 export default UserDetails;