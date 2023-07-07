import React from 'react';
import './style.module.css';


const Settings = () => {
  return (
    <div className='setting'>
      <p className='my-3 fs-5'>What would you like to do?</p>
      <ul className='list-group'>
        <li className='list-group-item'>
          <a href="/UpdateUserProfile" className='fs-4'>Update Profile</a>
        </li>
        <li className='list-group-item'>
          <a href="/createNewPassword" className='fs-4'>Reset Password</a>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
