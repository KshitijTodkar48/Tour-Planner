import React from "react";
import "./App.css" ;

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="input">
          <label for="options">City to tour : </label>
          <select id="options" name="options">
            <option value="" disabled selected hidden>
              Select a city
            </option>
            <option value="option1">Pune</option>
          </select>
        </div>

        <div className="input">
          <label for="options">Area of interest for tourist places : </label>
          <select id="options" name="options">
            <option value="" disabled selected hidden>
              Select an option
            </option>
            <option value="option1">Historical/Heritage based Sites</option>
            <option value="option2">Religious Sites</option>
            <option value="option3">Natural Sites</option>
          </select>
        </div>

        <div className="results">
          <button>Show locations</button>
        </div>

      </div>
    </div>
  );
}

export default App;
