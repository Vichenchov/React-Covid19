import React, {useEffect, useState} from 'react';
import SearchPage from "./Search";
import DataBar from "./DataBar";
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

function Title() {

    // יש בעיה בהגדרה של המערך בUSESATAE
    const [list,
        setList] = useState({data: []});
    const [flag,
        setFlag] = useState('');
    const [inputText,
        setInputText] = useState("Israel");
    const [loading,
        setLoading] = useState(false);

    async function newData() {
        const response = await axios.get('https://corona.lmao.ninja/v2/countries/' + inputText);
        const data = response.data;
        setList({data});
        console.log({data});
        setFlag(data.countryInfo.flag);
        setLoading(true);
    }

    useEffect(() => {
        newData();
    }, []);

    // gets the value from the input and set it as "inputText"
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        console.log(newValue);
    }

    return (
        <div>
            <h1 className="title">Covid-19 Tracker</h1>
            <SearchPage
                handleChange={handleChange}
                inputText={inputText}
                clicked={newData}/> {loading
                ? <DataBar
                        flag={flag}
                        country={list.data.country}
                        totalCases={list.data.cases}
                        activeCases={list.data.active}
                        todayCases={list.data.todayCases}
                        todayRecovered={list.data.todayRecovered}
                        deaths={list.data.deaths}/>
                : <ReactBootStrap.Spinner animation="border" variant="warning"/>}

        </div>
    );
}

export default Title;
