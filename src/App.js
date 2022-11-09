import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/country";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import CountrySkeleton from "./components/countrySkeleton";

function App() {
    const [allData, setAllData] = useState([]);
    const [oldCountries, setOldCountries] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all";

        fetch(url)
            .then((res) => {
                if (res.ok) return res.json();
                throw Error("Could not fetch data");
            })
            .then((data) => {
                setAllData(data);
                setOldCountries(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setIsloading(false);
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
            <Header handleSearch={handleSearch} />
            <div className='container'>
                <div className='row'>
                    {error && <h3>{error}</h3>}
                    {isLoading
                        ? Array.from(new Array(8)).map((e, i) => {
                            return <CountrySkeleton key={i} />;
                        })
                        : ""}

                    {allData.map((e) => (
                        <Country key={uuidv4()} singleObj={e} handleRemove={handleRemove} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
