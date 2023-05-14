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
      location: "https://www.google.co.in/maps/place/Shaniwar+Wada/@18.5194647,73.8527372,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c065144d8edf:0x3703b8095866c54b!8m2!3d18.5194647!4d73.8553175!16zL20vMDJ6aDh2",
    },
    {
      image: image12,
      name: "Aga-Khan Palace",
      time: "9 am - 5:30 pm",
      fees: "5 INR",
      category: "Historical/Heritage",
      location: "https://www.google.co.in/maps/place/Aga+Khan+Palace/@18.5524942,73.898876,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c11768711b1b:0xac1ba97447d569f4!8m2!3d18.5524942!4d73.9014563!16zL20vMGI4MTFj",
    },
  ];
  const ReligiousArray = [
    {
      image: image21,
      name: "ISKCON NVCC Temple",
      time: "4:30 am - 8:45 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.co.in/maps/place/ISKCON+NVCC+Pune/@18.4485574,73.8785314,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eafba92dd749:0x5eba1b5bbe09d7ee!8m2!3d18.4485574!4d73.8811117!16s%2Fm%2F0v3g7rc",
    },
    {
      image: image22,
      name: "Dagadu-Sheth Ganpati",
      time: "6 am - 11 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.co.in/maps/place/Shreemant+Dagdusheth+Halwai+Ganpati+Mandir/@18.5164555,73.8535409,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c06fa5b442ff:0x9df365f5b648bce1!8m2!3d18.5164555!4d73.8561212!16s%2Fm%2F04zxxlg",
    },
  ];
  const NaturalArray = [
    {
      image: image31,
      name: "Tamhini Ghat",
      time: "--",
      fees: "No entry-fees",
      category: "Natural",
      location: "https://www.google.co.in/maps/place/Tamhini+Ghat/@18.4759103,73.4489205,15z/data=!3m1!4b1!4m6!3m5!1s0x3be8072bbe562ae7:0x7bbcc611b0328a31!8m2!3d18.4759109!4d73.4592417!16s%2Fm%2F0vxfph4",
    },
    {
      image: image32,
      name: "Rajiv-Gandhi Zoological Park",
      time: "9:30 am - 5 pm",
      fees: "40 INR (Adults) ; 10 INR (Kids)" ,
      category: "Natural",
      location: "https://www.google.co.in/maps/place/Rajiv+Gandhi+Zoological+Park/@18.4524807,73.8582174,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eac307f7a82f:0x3ac431343224b00b!8m2!3d18.4524807!4d73.8607977!16s%2Fm%2F0479krv",
    },
  ];

  const handleClick = (url) => {
    window.open(url , '_blank') ;
  };

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
                    <div className="info-field"><div className="que">Location Name : </div> <div className="ans">{place.name}</div></div>
                    <div className="info-field"><div className="que">Opening hours : </div> <div className="ans">{place.time} </div></div>
                    <div className="info-field"><div className="que">Entry-fees : </div> <div className="ans">{place.fees} </div></div>
                    <div className="info-field"><div className="que">Category of site : </div> <div className="ans">{place.category} </div></div>
                    <button onClick={() => handleClick(place.location)} >Show location</button>
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
                        <div className="info-field"><div className="que">Location Name : </div> <div className="ans">{place.name}</div></div>
                        <div className="info-field"><div className="que">Opening hours : </div> <div className="ans">{place.time} </div></div>
                        <div className="info-field"><div className="que">Entry-fees : </div> <div className="ans">{place.fees} </div></div>
                        <div className="info-field"><div className="que">Category of site : </div> <div className="ans">{place.category} </div></div>
                        <button onClick={() => handleClick(place.location)}>Show location</button>
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
                        <div className="info-field"><div className="que">Location Name : </div> <div className="ans">{place.name}</div></div>
                        <div className="info-field"><div className="que">Opening hours : </div> <div className="ans">{place.time} </div></div>
                        <div className="info-field"><div className="que">Entry-fees : </div> <div className="ans">{place.fees} </div></div>
                        <div className="info-field"><div className="que">Category of site : </div> <div className="ans">{place.category} </div></div>
                        <button onClick={() => handleClick(place.location)}>Show location</button>
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
