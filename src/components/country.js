import React from "react";
import "./country.css";

const Country = (props) => {
    const singleObj = props.singleObj;
    const { flags, name, capital, area, population } = singleObj;

    const handleRemove = props.handleRemove;

    return (
        <div className='col-md-4'>
            <div className='wraper'>
                <img src={flags.png} alt='' className='img-fluid' />
                <div className='info'>
                    <p> Name: {name.common}</p>
                    <p> Capital : {capital}</p>
                    <p> Area : {area}</p>
                    <p> Population : {population}</p>
                </div>
                <button onClick={() => handleRemove(singleObj)} className='btn btn-danger'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Country;
