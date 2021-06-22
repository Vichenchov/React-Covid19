import React, {useEffect, useState} from 'react';
import Box from './Box';

function DataBox(props) {

    return (
        <div className="data">
            <div className="country">
                <img src={props.flag} alt="flag" className="flag"></img>
                <label id="countryName">{props.country}</label><br/>
            </div>
            <div>
                <Box label={"Total Cases"} data={props.totalCases}/>
                <Box label={"Active Cases"} data={props.activeCases}/>
                <Box label={"New Cases"} data={props.todayCases}/><br/>
                <Box label={"Recovered Today"} data={props.todayRecovered}/>
                <Box label={"Total Deaths"} data={props.deaths}/>

            </div>
        </div>
    );
}

export default DataBox;