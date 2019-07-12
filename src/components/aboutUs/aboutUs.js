import React from 'react';
//import PropTypes from 'prop-types';
import "./aboutUs.css";

const aboutUs = () => {
    const displayText = (e) => {
        e.preventDefault();

        const moreTextElement = document.querySelector("#moreText");
        const lessTextElement = document.querySelector("#lessText");
        const aboutUsButton = document.querySelector(".aboutUsButton");

        if(lessTextElement.style.display === "none"){
            aboutUsButton.innerHTML = "Read more...";
            moreTextElement.style.display = "none";
            lessTextElement.style.display = "inline";
        }
        else {
            aboutUsButton.innerHTML = "Read less...";
            moreTextElement.style.display = "inline";
            lessTextElement.style.display = "none";
        }
    }

    return (
        <div className="aboutUs">
            <h1>About Us</h1>
            
                <p>
                    For entry level developers
                    <span id="lessText" className="">...</span><span> </span>

                    <span id="moreText" className="">
                    people interested in starting a new career in tech, 
                    and anyone wanting to encourage and help newer developers. 
                    Join us to hear relevant speakers, enjoy drinks and network with your fellow developers, 
                    and make new connections! We look forward to meeting you.
                    </span>
                </p>

                <button className="aboutUsButton" onClick={displayText} type="button">Read more...</button>
            
        </div>
    )
}

export default aboutUs;