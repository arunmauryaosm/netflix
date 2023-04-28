import React from 'react'
import './Profile.css'
import Navbar from './Navbar'
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Proflie = () => {

    const user = useSelector(selectUser)
    const navigate = useNavigate()
    return (
        <div className='profile'>
            <Navbar />
            <div className='profile_section'>
                <div className='profile_logo'>
                    <CgProfile size={80} color='red' />
                </div>
                <div className='profile_details'>
                    <h1>Profile</h1>
                    <h3>{user.email}</h3>
                    <div className='profile_plans'>
                        <button onClick={() => auth.signOut(navigate('/'))} > Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proflie
