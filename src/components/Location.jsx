import React from "react";
import "./Location.css";
import image1 from "../Images/Shaniwar_Wada_Attractions.jpg";
import image2 from "../Images/Shreemant-Dagdusheth-Halwai-Sarvajanik-Ganpati-Pune.jpg";

const Location = (props) => {
    const locationArray = [
        {
            image : image1 ,
            name : "Shanivar-Wada" ,
            time : "9:30 am - 5:30 pm" ,
            category : "Historical/Heritage" ,
        },
        {
            image : image2 ,
            name : "Dagadusheth-Ganpati" ,
            time : "6 am - 11 pm" ,
            category : "Religious" ,
        },
    ]
    return(
        <div className="location">    
         { 
           props.id!=="" ? <> {
           props.id==="Historical/Heritage" ? <>
            <div className="card">
                <div className="img">
                    <img src={locationArray[0].image} alt="Image_of_location" />
                </div>
                <div className="info">
                    <h3>Location Name : {locationArray[0].name}</h3>
                    <h3>Timings to visit : {locationArray[0].time} </h3>
                    <h3>Category of site : {locationArray[0].category} </h3>
                    <button>Show location</button>
                </div>
            </div>
            </>
           :
           <>  
             <div className="card">
                <div className="img">
                    <img src={locationArray[1].image} alt="Image_of_location" />
                </div>
                <div className="info">
                    <h3>Location Name : {locationArray[1].name}</h3>
                    <h3>Timings to visit : {locationArray[1].time} </h3>
                    <h3>Category of site : {locationArray[1].category} </h3>
                    <button>Show location</button>
                </div>
            </div>
          </>
         }</> : <></>
        }
        </div>
    )
}

export default Location ;
