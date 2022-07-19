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
};

export default Home;
