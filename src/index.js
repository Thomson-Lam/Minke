import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './components/Bars';
import reportWebVitals from './reportWebVitals';
// require('dotenv').config();

// const API_key = process.env.REACT_APP_API_KEY;
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); 
    root.render(
        <React.StrictMode>
            <Component />
        </React.StrictMode>
    )
} else {
    console.log("Error");
}




reportWebVitals(); // calls reportWebVitals() for perf metrics