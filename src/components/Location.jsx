import React from "react";
import "./Location.css";
import image11 from "../Images/Shaniwar_Wada_Attractions.jpg";
import image12 from "../Images/aga-khan-palace.jpg";
import image13 from "../Images/Lal-Mahal.jpg";
import image14 from "../Images/Raja Dinkar Kelkar Museum.jpg";
import image15 from "../Images/National War Museum.jpg";
import image16 from "../Images/Seven wonders park.jpg";
import image21 from "../Images/ISKCON-Temple.jpg";
import image22 from "../Images/Shreemant-Dagdusheth-Halwai-Sarvajanik-Ganpati-Pune.jpg";
import image23 from "../Images/Chatushrungi Temple.jpg";
import image24 from "../Images/Sant Dnyaneshwar's Samadhi Mandir Alandi.jpg";
import image25 from "../Images/Shree Mahaganapati Ranjangaon.jpg";
import image26 from "../Images/Swami-Narayan Mandir.jpg";
import image27 from "../Images/Ramdara Temple.jpg";
import image31 from "../Images/Osho Garden.png";
import image32 from "../Images/Rajiv-Gandhi-Zoological-Park.jpg";
import image33 from "../Images/Tamhini-Ghat.jpg";
import image34 from "../Images/Devkund Waterfall.jpg";
import image35 from "../Images/Khadakvasla Dam.jpg";
import image36 from "../Images/Okayama Friendship Garden.jpg";

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
      time: "9:00 am - 5:30 pm",
      fees: "5 INR",
      category: "Historical/Heritage",
      location: "https://www.google.co.in/maps/place/Aga+Khan+Palace/@18.5524942,73.898876,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c11768711b1b:0xac1ba97447d569f4!8m2!3d18.5524942!4d73.9014563!16zL20vMGI4MTFj",
    },
    {
      image: image13,
      name: "Lal-Mahal",
      time: "9:00 am - 1:00 pm ; 4:30 pm - 6:00 pm",
      fees: "5 INR",
      category: "Historical/Heritage",
      location: "https://www.google.co.in/maps/place/Lal+Mahal/@18.5187433,73.8540734,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c065793c91a1:0x4a206d80daf21f92!8m2!3d18.5187433!4d73.8566483!16s%2Fm%2F05b_7gy",
    },
    {
      image: image14,
      name: "Raja Dinkar Kelkar Museum",
      time: "10:00 am - 5:30 pm",
      fees: "300 INR" ,
      category: "Historical/Heritage",
      location: "https://www.google.com/maps/place/Raja+Dinkar+Kelkar+Museum/@18.5106855,73.8518558,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c073c7e01df5:0x45cf6b0362946df3!8m2!3d18.5106855!4d73.8544307!16zL20vMGd6MDE1",
    },
    {
      image: image15,
      name: "National War Museum",
      time: "9:30 am - 12:00 pm ; 4:00 pm - 7:00 pm",
      fees: "20 INR" ,
      category: "Historical/Heritage",
      location: "https://www.google.com/maps/place/National+War+Memorial+Southern+Command/@18.5231259,73.8870919,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1ad30825a81:0x9f519de6c2222f8c!8m2!3d18.5231259!4d73.8896668!16s%2Fm%2F09rx68b",
    },
    {
      image: image16,
      name: "Seven Wonders Park",
      time: "6:00 am - 10:00 am ; 4:00 pm - 8:00 pm",
      fees: "20 INR" ,
      category: "Historical/Heritage",
      location: "https://www.google.com/maps/place/Seven+Wonders+Dream+Park/@18.4928445,73.8512972,17z/data=!4m15!1m8!3m7!1s0x3bc2c01ad25bd1c9:0x13072d1f565d6c82!2sSeven+Wonders+Dream+Park!8m2!3d18.4928445!4d73.8534859!10e5!16s%2Fg%2F11f38dx9m2!3m5!1s0x3bc2c01ad25bd1c9:0x13072d1f565d6c82!8m2!3d18.4928445!4d73.8534859!16s%2Fg%2F11f38dx9m2",
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
      time: "6:00 am - 11:00 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.co.in/maps/place/Shreemant+Dagdusheth+Halwai+Ganpati+Mandir/@18.5164555,73.8535409,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c06fa5b442ff:0x9df365f5b648bce1!8m2!3d18.5164555!4d73.8561212!16s%2Fm%2F04zxxlg",
    },
    {
      image: image23,
      name: "Chatushrungi Temple",
      time: "7:00 am - 9:00 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.com/maps/place/Shri+Chatushrungi+Devi+Temple/@18.5391121,73.8239051,17z/data=!4m10!1m2!2m1!1sChatushrungi+Temple!3m6!1s0x3bc2bf7781a70389:0x768b0a262075a05e!8m2!3d18.5390549!4d73.8283972!15sChNDaGF0dXNocnVuZ2kgVGVtcGxlWhUiE2NoYXR1c2hydW5naSB0ZW1wbGWSAQxoaW5kdV90ZW1wbGWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTlNORGxMYzFGbkVBReABAA!16s%2Fm%2F02x4tgf",
    },
    {
      image: image24,
      name: "Sant Dnyaneshwar's Mandir, Alandi",
      time: "6:00 am - 8:00 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.com/maps/place/Shree+Sant+Dnyaneshwar+Maharaj+Sanjeevan+Samadhi+Mandir/@18.6768764,73.8940634,17z/data=!3m1!4b1!4m10!1m2!2m1!1sSant+Dnyaneshwar's+Samadhi+Mandir+Alandi!3m6!1s0x3bc2c9f8c2df6cd5:0x25305b19790432e9!8m2!3d18.6768764!4d73.8966383!15sCihTYW50IERueWFuZXNod2FyJ3MgU2FtYWRoaSBNYW5kaXIgQWxhbmRpWioiKHNhbnQgZG55YW5lc2h3YXIncyBzYW1hZGhpIG1hbmRpciBhbGFuZGmSAQxoaW5kdV90ZW1wbGWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjFPWEF6UTNWblJSQULgAQA!16s%2Fg%2F11h9bh43vv",
    },
    {
      image: image25,
      name: "Shree Mahaganapati Ranjangaon",
      time: "5:00 am - 10:00 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.com/maps/place/Shree+Mahaganapati+Ranjangaon/@18.7533963,74.2380246,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc329c9f7fcb4db:0xb9c9200d8e106e0f!8m2!3d18.7533963!4d74.2405995!16s%2Fg%2F1tdbv67m",
    },
    {
      image: image26,
      name: "Swami-Narayan Mandir",
      time: "7:00 am - 12:00 pm ; 4:00 pm - 8:30 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.com/maps/place/BAPS+Swaminarayan+Mandir/@18.4420753,73.6922885,12z/data=!4m10!1m2!2m1!1sSwami-Narayan+Mandir+Pune!3m6!1s0x3bc295da5a174d1b:0x2445eee2ace04bb3!8m2!3d18.4420753!4d73.8364841!15sChlTd2FtaS1OYXJheWFuIE1hbmRpciBQdW5lWhsiGXN3YW1pIG5hcmF5YW4gbWFuZGlyIHB1bmWSAQxoaW5kdV90ZW1wbGWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmhNbEJ5U3kxM1JSQULgAQA!16s%2Fg%2F11h_2lj36j",
    },
    {
      image: image27,
      name: "Ramdara Temple",
      time: "7:00 am - 5:00 pm",
      fees: "No entry-fees",
      category: "Religious",
      location: "https://www.google.com/maps/place/Ramdara+temple/@18.4437359,73.9814119,14z/data=!4m10!1m2!2m1!1sRamdara+Temple!3m6!1s0x3bc2e88f6feadfe3:0xce8e0d7b9838963a!8m2!3d18.4437359!4d74.0174608!15sCg5SYW1kYXJhIFRlbXBsZVoQIg5yYW1kYXJhIHRlbXBsZZIBDGhpbmR1X3RlbXBsZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSck5tVnllVTEzRUFF4AEA!16s%2Fg%2F1vzn3_xv",
    },
  ];
  const NaturalArray = [
    {
      image: image31,
      name: "Osho Garden",
      time: "6:00 am - 9:00 am ; 3:00 pm - 6:00 pm",
      fees: "No entry-fees" ,
      category: "Natural",
      location: "https://www.google.com/maps/place/Osho+Garden/@18.5354317,73.8857593,17z/data=!4m7!3m6!1s0x3bc2c101d5242505:0xd57c1d7452741948!8m2!3d18.5354317!4d73.8883342!10e4!16s%2Fg%2F11c708q54l",
    },
    {
      image: image32,
      name: "Rajiv-Gandhi Zoological Park",
      time: "9:30 am - 5:00 pm",
      fees: "40 INR (Adults) ; 10 INR (Kids)" ,
      category: "Natural",
      location: "https://www.google.co.in/maps/place/Rajiv+Gandhi+Zoological+Park/@18.4524807,73.8582174,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eac307f7a82f:0x3ac431343224b00b!8m2!3d18.4524807!4d73.8607977!16s%2Fm%2F0479krv",
    },
    {
      image: image33,
      name: "Tamhini Ghat",
      time: "--",
      fees: "No entry-fees",
      category: "Natural",
      location: "https://www.google.co.in/maps/place/Tamhini+Ghat/@18.4759103,73.4489205,15z/data=!3m1!4b1!4m6!3m5!1s0x3be8072bbe562ae7:0x7bbcc611b0328a31!8m2!3d18.4759109!4d73.4592417!16s%2Fm%2F0vxfph4",
    },
    {
      image: image34,
      name: "Devkund Waterfall",
      time: "--",
      fees: "No entry-fees" ,
      category: "Natural",
      location: "https://www.google.com/maps/place/Devkund+Waterfall/@18.4599131,73.3688826,14z/data=!3m1!4b1!4m6!3m5!1s0x3be81f415927068f:0x5f207a3e8e1790b6!8m2!3d18.4599146!4d73.3894823!16s%2Fg%2F11gdk_3h3l",
    },
    {
      image: image35,
      name: "Khadakvasla Dam",
      time: "--",
      fees: "No entry-fees" ,
      category: "Natural",
      location: "https://www.google.com/maps/place/Khadakwasla+Dam,+Maharashtra/@18.4422936,73.7645165,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc295c8ecccbc83:0x85178b0593a875e0!8m2!3d18.4422936!4d73.7670914!16zL20vMDRwbnc5",
    },
    {
      image: image36,
      name: "Okayama Friendship Garden",
      time: "6:00 am - 10:30 am ; 4:00 pm - 8:00 pm",
      fees: "5 INR" ,
      category: "Natural",
      location: "https://www.google.com/maps/place/Pune-Okayama+Friendship+Garden/@18.4914025,73.835152,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bff990000001:0x3291e3e36f9ad234!8m2!3d18.4914025!4d73.8377269!16s%2Fm%2F0kf_2nb",
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
