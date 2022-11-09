import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Details from "./components/details";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='*' element={<h1>Page noy found</h1>} />
                <Route path='/profile' element={<Navigate replace to='/blog'/>} />
                <Route path='/blog' element={<h1>This is Blog page</h1>} />
                <Route path='/about/:key' element={<Details />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
