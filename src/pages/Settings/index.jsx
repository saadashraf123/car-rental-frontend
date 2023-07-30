import React from 'react';
import './style.module.css';
import { Link } from 'react-router-dom';


const Settings = () => {
    return (
        <div className='setting'>
            <p className='my-3 fs-5'>What would you like to do?</p>
            <ul className='list-group fs-5'>
                <li className='list-group-item'>
                    <Link to="/UpdateUserProfile" >Update Profile</Link>
                </li>
                <li className='list-group-item'>
                    <Link to="/updatePassword" >Change Password</Link>
                </li>
            </ul>
        </div>
    );
};

export default Settings;
