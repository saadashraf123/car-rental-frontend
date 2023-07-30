import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StateContext from './Contexts/stateContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StateContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StateContext>
    </React.StrictMode>
);

