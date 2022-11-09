import React from "react";
import { Link } from "react-router-dom";
import "./country.css";



const Country = (props) => {
    const singleObj = props.singleObj;
    const { flags, name, capital } = singleObj;

    const handleRemove = props.handleRemove;

    // console.log(singleObj);

    return (
        <div className='col-md-4 mb-4'>
            <div className='wraper'>
                <img src={flags.png} alt='' className='img-fluid' />
                <div className='info'>
                    <p> Name: {name.common}</p>
                    <p> Capital : {capital}</p>
                </div>

                <Link to={`/about/${name.common}`} state={singleObj}>
                    <button className='btn btn-primary'>More Details</button>
                </Link>

                <button onClick={() => handleRemove(singleObj)} className='btn btn-danger'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Country;
