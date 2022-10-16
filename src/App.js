import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/country";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";

function App() {
    const [allData, setAllData] = useState([]);
    const [oldCountries, setOldCountries] = useState([]);

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAllData(data);
                setOldCountries(data);
            });
    }, []);

    const handleRemove = (e) => {
        const removedCoutry = allData.filter((single) => single.name.common !== e.name.common);
        setAllData(removedCoutry);
    };

    const handleSearch = (e) => {
        const intVal = e.toLowerCase();

        const newCountries = oldCountries.filter((country) => {
            const name = country.name.common;

            const lowerName = name.toLowerCase();

            return lowerName.startsWith(intVal);
        });

        setAllData(newCountries);
    };

    return (
        <div className='App'>
            <h1 className='text-center'>Country App</h1>
            <Header handleSearch={handleSearch} />
            <div className='container'>
                <div className='row'>
                    {allData.map((e) => (
                        <Country key={uuidv4()} singleObj={e} handleRemove={handleRemove} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
