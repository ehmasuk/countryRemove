import React from "react";
import { useLocation } from "react-router-dom";
import "./details.css";

export default function Details() {
    const {
            flags,
            name,
            capital,
            population,
            area,
            coatOfArms,
            region,

        }
        = useLocation().state;

    console.log(useLocation().state);

    return (
        <div className='details py-5'>
            <div className='container'>
                <img src={flags.png} alt='' className='img-fluid mr-5' />
                <img src={coatOfArms.png} alt='' className='img-fluid ml-5' />
                <div className='row'>
                    <div className='col-md-6'>
                        <span className='title'>Name</span>
                        <span>:</span>
                        <span className='info'>{name.common}</span>
                    </div>
                    <div className='col-md-6'>
                        <span className='title'>Capital</span>
                        <span>:</span>
                        <span className='info'>{capital}</span>
                    </div>
                    <div className='col-md-6'>
                        <span className='title'>Population</span>
                        <span>:</span>
                        <span className='info'>{population}</span>
                    </div>
                    <div className='col-md-6'>
                        <span className='title'>Area</span>
                        <span>:</span>
                        <span className='info'>{area} km²</span>
                    </div>
                    <div className='col-md-6'>
                        <span className='title'>Region</span>
                        <span>:</span>
                        <span className='info'>{region}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
