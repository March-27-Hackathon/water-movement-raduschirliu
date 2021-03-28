import React from 'react';
import './MainPage.css';

import logo from '../../assets/logo.svg';

function MainPage() {
  return (
    <div className="MainPage">
      <div className="logo-container">
        <img className="logo" src={logo} alt="CacheBox"></img>
      </div>
      <h1 className="title">
        <span className="title-first-half">Cache</span>
        <span className="title-second-half">Box</span>
      </h1>
      <p className="admin-login-button">Admin Login</p>
      <p className="description">
        Upload your files on or offline. Your uploads will sync once connected
        to the internet. Blurb here...
      </p>
      <p className="dropzone">Drag and drop your .mp4 video here</p>
    </div>
  );
}

export default MainPage;
