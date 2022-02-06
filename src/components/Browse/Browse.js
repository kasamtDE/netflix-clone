import React, { useContext, useEffect, useState } from 'react';
import logo from "../Header/logo.svg"
import Row from '../Row/Row';
import "./Browse.css"
import user1 from "./users/1.png"
import {fetchUrl} from "../../requests.js"
import {UserAuthContext} from "../Contexts/UserAuthContext.js"
function Browse() {
    
    const {logout,user} = useContext(UserAuthContext)

    const openAccount = () =>{
        const getImageContainer = document.querySelector(".user-account-container")
        getImageContainer.classList.toggle("open")
    }
    const {fetchTrendingMovies,fetchTopRatedMovies,fetchPopularMovies,fetchTrendingSeries,fetchAnimationMovies} = fetchUrl
  
  return <div className='browse-container'>
      <div className='browse-header-container'>
          <img src={logo} className='browse-logo' />
          <div className='browse-user-container'>
                <img src={user1} className='browse-user-image' onClick={openAccount} />
                <div className='user-account-container'>
                    <p>{user?.email}</p>
                    <button className='logout' onClick={logout}>Logout</button>
                </div>
          </div>

      </div>
      <Row title = "Trending Movies" movie = {fetchTrendingMovies} />
      <Row title = "Top Rated Movies" movie = {fetchTopRatedMovies} />
      <Row title = "Popular Movies" movie = {fetchPopularMovies} />
      <Row title = "Animation Movies" movie = {fetchAnimationMovies} />
      <Row title = "Trending Series" movie = {fetchTrendingSeries} />

  </div>;
}

export default Browse;
