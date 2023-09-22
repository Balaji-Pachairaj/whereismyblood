import React from "react";
import NavBar from "../Component/Header/NavBar";
import Welcome from "../Component/IntroSection.js/Welcome";
import Feature from "../Component/IntroSection.js/Feature";
import Online from "../Component/Appointment/Online";



const Home = () => {
     return (
          <div className=" mb-10">
               <NavBar />
                <Welcome />
                <Feature />
                <Online />
                {/* <Offline /> */}
          </div>
     );
};

export default Home;
