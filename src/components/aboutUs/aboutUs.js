import React from 'react';
//import PropTypes from 'prop-types';
import "./aboutUs.css";

const aboutUs = () => {
    /* const displayText = (e) => {
        e.preventDefault();

        const moreTextElement = document.querySelector("#moreText");
        const lessTextElement = document.querySelector("#lessText");

        moreTextElement.classList.toggle("hideElement");
        lessTextElement.classList.toggle("hideElement");
     
    }  */

    return (
        <div className="aboutUs">
            <h1>About Us</h1>
            
                <p>
                    For entry level developers,<span> </span> 
                    <span id="lessText" className=""> ...more </span>

                    <span id="moreText" className="hideElement">
                    people interested in starting a new career in tech, 
                    and anyone wanting to encourage and help newer developers. 
                    Join us to hear relevant speakers, enjoy drinks and network with your fellow developers, 
                    and make new connections! We look forward to meeting you.
                    </span>
                </p>
            
        </div>
    )
}

export default aboutUs;