import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import Demo from './components/demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Demo/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
