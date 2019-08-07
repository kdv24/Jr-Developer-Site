import React, { Component } from "react";

import styles from "./volunteer.module.css";

class Volunteer extends Component {

    state = {
        name: "",
        email: "",
        volunteerList: ""
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    handleInputChanges = async (e) => {
        await this.setState({[e.target.name]: e.target.value});
    }
    

    render(){
        return (
            <div className={styles.volunteerComponent}>

                <form
                    className={styles.volunteerForm}
                    name="volunteerForm"
                    method="POST"
                    action="https://formspree.io/kvnyang503@gmail.com"
                >
                    <h2 className={styles.volunteerTitle}>Volunteer Form</h2>
                    <div>
                        <label htmlFor="userName">Name:</label>
                        <input type="text" name="name" id="userName" onChange={this.handleInputChanges} value={this.state.name} />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" onChange={this.handleInputChanges} value={this.state.email} />
                    </div>

                    <div>
                        <label htmlFor="volunteerList" >Volunteer Options: </label>
                        <select name="volunteerList" id="volunteerList" value={this.state.volunteerList} onBlur={this.handleInputChanges} onChange={this.handleInputChanges}>
                            <option value="twitterManagement" >Twitter Account Management</option>
                            <option value="greeter" >Guess Greeter</option>
                            <option value="signage" >Signage for Vacasa Nights</option>
                            <option value="socialMediaManagement" >Social Media management</option>
                        </select>
                    </div>
                    
                    
                    <button type="submit">Submit</button>

                </form>   
            </div>
        )
    }
}

export default Volunteer;