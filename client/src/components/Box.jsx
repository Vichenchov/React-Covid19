import React from 'react';

function Box(props) {

    return (
        <footer className='footer'>
        <label className='dataLabel'>{props.label}</label><br/>
        <label className='numbers'>{props.data}</label>  
        </footer>
    );
}

export default Box;