import React, { useEffect, useState } from "react";
import "./header.css";

const Header = (props) => {
    const [intVal, setIntval] = useState("");

    const searcgHandle = (e) => {
        setIntval(e.target.value);
    };

    useEffect(() => {
        props.handleSearch(intVal);
    }, [intVal]);

    return (
        <div className='container text-center header'>
            <input value={intVal} onChange={searcgHandle} type='text' placeholder='Search countries' />
        </div>
    );
};

export default Header;
