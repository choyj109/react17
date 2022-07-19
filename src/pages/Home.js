<<<<<<< HEAD
import React from "react";
import SideMenu from "../components/SideMenu/index";
import VideoList from "../components/VideoList/index";

const Home = () => {
  return (
    <>
      <SideMenu />
      <section className="main-content">
        <VideoList />
      </section>
    </>
  );
=======
import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';
const Home = () => {
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
             <VideoList />
          </section>
        </>
    );
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887
};

export default Home;
