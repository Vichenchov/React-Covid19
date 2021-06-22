// import { response } from 'express';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

const SearchBar = (props) => {

    return (
        <div>
            <input
                className='search'
                onChange={props.handleChange}
                type="text"
                value={props.inputText}
                placeholder="Enter country name"/>
            <Button id='changeButton' variant="outline-warning" onClick={props.clicked}>Change Country Stats</Button><br/>
        </div>

    );
}

export default SearchBar;