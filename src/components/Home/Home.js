import React from "react";
import video from "../../logo/ferrari_homepage_video.mp4";
import "./Home.css";

export const Home = () => {
  return (
    <div className="ferrari--homepage">
      <video
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        playsInline
        autoPlay
        muted
        loop
        id="background-video"
      >
        <source src={video} type="video/mp4"></source>
      </video>
      <h1 className="ferrari--text">Legend is Reborn.</h1>
    </div>
  );
};
