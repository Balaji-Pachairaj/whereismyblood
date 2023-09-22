import React from "react";
import Welcome from "../Component/IntroSection.js/Welcome";
import Feature from "../Component/IntroSection.js/Feature";
import Online from "../Component/Appointment/Online";
import Offline from "../Component/Appointment/Offline";

const Home = () => {
     return (
          <div className=" mb-10">
               <Welcome />
               <Feature />
               <Online />
           
          </div>
     );
};

export default Home;
