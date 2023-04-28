import React from "react";
import "./Location.css";
import image11 from "../Images/Shaniwar_Wada_Attractions.jpg";
import image12 from "../Images/aga-khan-palace.jpg";
import image21 from "../Images/ISKCON-Temple.jpg";
import image22 from "../Images/Shreemant-Dagdusheth-Halwai-Sarvajanik-Ganpati-Pune.jpg";
import image31 from "../Images/Tamhini-Ghat.jpg";
import image32 from "../Images/Rajiv-Gandhi-Zoological-Park.jpg";

const Location = (props) => {
  const HistoricalArray = [
    {
      image: image11,
      name: "Shanivar-Wada",
      time: "9:30 am - 5:30 pm",
      fees: "5 INR ",
      category: "Historical/Heritage",
    },
    {
      image: image12,
      name: "Aga-khan Palace",
      time: "9 am - 5:30 pm",
      fees: "5 INR",
      category: "Historical/Heritage",
    },
  ];
  const ReligiousArray = [
    {
      image: image21,
      name: "ISKCON Temple",
      time: "4:30 am - 8:45 pm",
      fees: "No entry-fees",
      category: "Religious",
    },
    {
      image: image22,
      name: "Dagadu-sheth Ganpati",
      time: "6 am - 11 pm",
      fees: "No entry-fees",
      category: "Religious",
    },
  ];
  const NaturalArray = [
    {
      image: image31,
      name: "Tamhini Ghat",
      time: "--",
      fees: "No entry-fees",
      category: "Natural",
    },
    {
      image: image32,
      name: "Rajiv-Gandhi Zoological Park",
      time: "9:30 am - 5 pm",
      fees: "40 INR (Adults) ; 10 INR (Kids)" ,
      category: "Natural",
    },
  ];
  return (
    <div className="location">
      {props.id !== "" ? (
        <>
          {props.id === "Historical/Heritage" ? (
            <>
              {HistoricalArray.map((place, index) => (
                <div className="card" key={index}>
                  <div className="img">
                    <img src={place.image} alt="Image_of_location" />
                  </div>
                  <div className="info">
                    <p>Location Name : {place.name}</p>
                    <p>Opening hours : {place.time} </p>
                    <p>Entry-fees : {place.fees} </p>
                    <p>Category of site : {place.category} </p>
                    <button>Show location</button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {props.id === "Religious" ? (
                <>
                  {ReligiousArray.map((place, index) => (
                    <div className="card" key={index}>
                      <div className="img">
                        <img src={place.image} alt="Image_of_location" />
                      </div>
                      <div className="info">
                        <p>Location Name : {place.name}</p>
                        <p>Opening hours : {place.time} </p>
                        <p>Entry-fees : {place.fees} </p>
                        <p>Category of site : {place.category} </p>
                        <button>Show location</button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {NaturalArray.map((place, index) => (
                    <div className="card" key={index}>
                      <div className="img">
                        <img src={place.image} alt="Image_of_location" />
                      </div>
                      <div className="info">
                        <p>Location Name : {place.name}</p>
                        <p>Opening hours : {place.time} </p>
                        <p>Entry-fees : {place.fees} </p>
                        <p>Category of site : {place.category} </p>
                        <button>Show location</button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Location;
