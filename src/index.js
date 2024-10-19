import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
// require('dotenv').config();

// const API_key = process.env.REACT_APP_API_KEY;
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
} else {
    console.log("Error");
}




reportWebVitals(); // calls reportWebVitals() for perf metrics