/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{html,js,jsx}"],
     theme: {
          extend: {
               colors: {
                    primary: "#015d67",
                    seconday: "#C70039",
                    thirdary: "#1F4D36",
                    differenat: "#F8DE22",


                    videoPrimary : "#33BBC5"
               },
          },
  
          fontFamily: {
               roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
               montserrat: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
          },

          boxShadow : {
             featureboxshadow : "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
     },
     plugins: [],
};
