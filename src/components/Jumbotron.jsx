import React from "react";
import {MDBContainer, MDBJumbotron} from "mdbreact";
import './Jumbotron.css';

export default function Jumbotron() {
    return (
        <>
            <MDBJumbotron fluid>
                <MDBContainer>
                    <h4 className="jumbotron-title">Small step every day</h4>
                    <p className="lead">Today is your day to start fresh, to eat right, to train hard, to live healthy,
                        to be proud. <span>© Bonnie Pfiester</span></p>
                </MDBContainer>
            </MDBJumbotron>
        </>
    )
}