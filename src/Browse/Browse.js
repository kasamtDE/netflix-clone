import React, { useContext, useEffect, useState } from 'react';
import logo from "../Header/logo.svg"
import Row from '../Row/Row';
import "./Browse.css"
import user1 from "./users/1.png"
import {fetchUrl} from "../../requests.js"
import {useAuthContext} from "../Contexts/UserAuthContext.js"
import Hero from '../Hero/Hero';
function Browse() {
    
    const {logout,user} = useAuthContext()

    const openAccount = () =>{
        const getImageContainer = document.querySelector(".user-account-container")
        getImageContainer.classList.toggle("open")
    }
    const {fetchTrendingMovies,fetchTopRatedMovies,fetchPopularMovies,fetchScienceFictionMovies,fetchAnimationMovies} = fetchUrl
  
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
      <Hero/>
      <Row title = "Trending Movies" movie = {fetchTrendingMovies} />
      <Row title = "Top Rated Movies" movie = {fetchTopRatedMovies} />
      <Row title = "Popular Movies" movie = {fetchPopularMovies} />
      <Row title = "Animation Movies" movie = {fetchAnimationMovies} />
      <Row title = "Science Fiction Movies" movie = {fetchScienceFictionMovies} />

  </div>;
}

export default Browse;
