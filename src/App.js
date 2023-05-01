import React, { useState,useEffect } from "react";
import "./App.css";
import Location from "./components/Location";

function App() {
 
 const [val,setVal] = useState(false) ; 
 const [category,setCategory] = useState("") ;

 const [inputValue, setInputValue] = useState('');

  // Load stored state when the component mounts
  useEffect(() => {
    console.log("Component mounted.") ;
    const storedValue = sessionStorage.getItem('myInputValue');
    if (storedValue) {
      setInputValue(storedValue);
      setVal(true) ;
    }
  }, []);

  // Save state to local storage when the input value changes
  useEffect(() => {
    sessionStorage.setItem('myInputValue', inputValue);
  }, [inputValue]); 


  const clickHandler = () => {
    const selectElement1 = document.getElementById("options1");
    const selectElement2 = document.getElementById("options2");
    const selectedOption1 = selectElement1.value;
    const selectedOption2 = selectElement2.value;
    if(selectedOption1 && selectedOption2)
      {
        setCategory(selectedOption2) ;
        setVal(true) ;
        setInputValue([selectedOption1 ,selectedOption2]) ;
      }
    else
      {
         alert("Please select both the fields.") ;
      }
        
  };

  return (
    <div className="App">
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

        <div className="results">
          <button onClick={clickHandler}>Show tour destinations</button>
          {
             val ? <Location id = {category}/> : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
