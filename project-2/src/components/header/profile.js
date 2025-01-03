import React, {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import { getProfile } from '../../services/api';

const Profile = () => {
    const [visible, setVisible] = useState(false);
    const [profile, setProfile] = useState({})
    const popRef = useRef(null);
    const myToken = localStorage.getItem('token') || "";
    const navigate = useNavigate()
    
    const onOpenProfile = () => {
        setVisible(true);
    }
    useOutsideClick(popRef, () => {
        if (visible) setVisible(false);
      });
      const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
      }
    const onProfileGet = async() =>{
        const token = myToken;
        const res = await getProfile(token);
        if(res){
            setProfile(res)
        }
    }
      useEffect(() => {
        onProfileGet()
      }, [])
  return (
    <>
        <div className='profileMain' ref={popRef}>
        <div className="profileBarHead" onClick={() => onOpenProfile()}>
            <img src={profile?.avatar} alt="" />
        </div>
        {visible && (
            <div className="profileCard" >
                <div className="cardTop"></div>
                <div className="cardBottom">
                    <div className="profileArea">
                    <div className="profile">
                        <img src={profile?.avatar} alt="" />
                    </div>
                    <div className="profileDetails">
                        <h5>{profile?.name}</h5>
                        <p>{profile?.email}</p>
                    </div>
                    </div>
                    <div className="addData">
                        <div onClick={logout}>Logout</div>
                    </div>
                </div>
            </div>
        )}
        </div>
    </>
  )
}

export default Profile;