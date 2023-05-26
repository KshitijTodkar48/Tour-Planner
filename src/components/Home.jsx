import React, { useState } from "react";
import "./Home.css";
import Location from "./Location";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image from "../Images/Tour-Chale-Hum.jpeg" ;
import { Link } from "react-router-dom";

function Home() {
 
 const [val,setVal] = useState(false) ; 
 const [category,setCategory] = useState("") ;
 const [days,setDays] = useState("") ;

  const clickHandler = () => {
    const selectElement1 = document.getElementById("options1");
    const selectElement2 = document.getElementById("options2");
    const selectElement3 = document.getElementById("options3");
    const selectedOption1 = selectElement1.value;
    const selectedOption2 = selectElement2.value;
    const selectedOption3 = selectElement3.value;
    if(selectedOption1 && selectedOption2 && selectedOption3)
      {
        setCategory(selectedOption2) ;
        setDays(selectedOption3) ;
        setVal(true) ;
      }
    else
      {
         alert("Please select all the fields.") ;
      }
        
  };

  return (
    <div className="App">
      <Navbar />
      <div className="appImage">
        <img src={image} alt="" />
      </div>
      <div className="container">
        <div className="input">
          <label for="options1">City to tour : </label>
          <select id="options1" name="options1">
            <option value="" disabled selected hidden>
              Select a city
            </option>
            <option value="Pune">Pune</option>
          </select>
        </div>

        <div className="input">
          <label for="options2">Area of interest for tourist places : </label>
          <select id="options2" name="options2">
            <option value="" disabled selected hidden>
              Select an option
            </option>
            <option value="Historical/Heritage">Historical/Heritage Sites</option>
            <option value="Religious">Religious Sites</option>
            <option value="Natural">Natural Sites</option>
          </select>
        </div>

        <div className="input">
          <label for="options3">Period of Visit : </label>
          <select id="options3" name="options3">
            <option value="" disabled selected hidden>
              Select an option
            </option>
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
          </select>
        </div>

        <div className="results">
          <button className = "dbutton"  onClick={clickHandler}>Show tour destinations</button>
          {
             val ? <><Location id1 = {days} id2 = {category} />
             <button className="dbutton">
          <Link className="link" to="/packages">Show Tour Packages</Link>
        </button>
             </> : <></>
          }
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
