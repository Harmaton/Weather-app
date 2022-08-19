import React, {useState} from "react";


function App() {

 // const url = `http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=process.env.API_KEY`;
  return (
    <div className="app">
      <div className="container">

      <div className="top">
        <div className="location">
          <p>Dallas</p>
        </div>
        <div className="temp">
          <h1>60 F</h1>
        </div>
        <div className="description">
        <p>Cloudy</p>
        </div>
         
      </div>

     <div className="bottom">
     <div className="humidity">
          <p className='bold'>20%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
        <p className='bold'>12 MPH</p>
        <p>Wind Speed</p>
        </div>
        <div className="feels">
        <p className='bold'>Good</p>
        <p>Feels Like</p>
        </div>
     </div>

      </div>
  
      
    </div>
  );
}

export default App;
