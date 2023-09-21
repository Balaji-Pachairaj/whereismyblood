import React from "react";
import NavBar from "../Component/Header/NavBar";
import Welcome from "../Component/IntroSection.js/Welcome";
import Feature from "../Component/IntroSection.js/Feature";


const Home = () => {
     return (
          <div className=" mb-10">
               <NavBar />
                <Welcome />
                <Feature />
          </div>
     );
};

export default Home;
