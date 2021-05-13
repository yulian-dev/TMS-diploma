import React, {useState} from "react";
import {MDBBtn, MDBCol, MDBRow} from "mdbreact";
import {HEALTHYGOODSKEY} from "../state-management/constants/index";
import './Validation.css';
import {Redirect} from "react-router";

export default function Validation({toggle, redirect, getPurchaseSum}) {

    const toggleModal = () => {
        toggle();
    }

    const isValid = (inputs) => {
        let allValideted = true;
        for (let i = 0; i < inputs.length - 1; i++) {
            const input = inputs[i].validity.valueMissing;
            if (input) {
                allValideted = false;
            }
        }
        return allValideted;
    }

    const cleanAllData = () => {
        localStorage.removeItem(HEALTHYGOODSKEY);
        getPurchaseSum();
    }

    const submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        if (isValid(event.target)) {
            cleanAllData();
            toggleModal();
        }
    };

    return (
        <>
            {redirect && <Redirect to='/'/>}
            <div className="container-validation">
                <form id='customerForm' className="needs-validation needs-validation-gap"
                      onSubmit={submitHandler} noValidate>
                    <MDBRow>
                        <MDBCol lg="4" className="mb-3">
                            <label htmlFor="firstName" className="grey-text">
                                First name
                            </label>
                            <input name="firstName" type="text" id="firstName"
                                   className="form-control" placeholder="First name" required/>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol lg="4" className="mb-3">
                            <label htmlFor="lastName" className="grey-text">
                                Last name
                            </label>
                            <input name="lastName" type="text" id="lastName"
                                   className="form-control" placeholder="Last name" required/>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol lg="4" className="mb-3">
                            <label htmlFor="email" className="grey-text">
                                Email
                            </label>
                            <input type="email" id="email" className="form-control"
                                   name="email" placeholder="Your Email address"/>
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" className="mb-3">
                            <label htmlFor="city" className="grey-text">
                                City
                            </label>
                            <input type="text" id="city" className="form-control"
                                   name="city" placeholder="City" required/>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol lg="4" className="mb-3">
                            <label htmlFor="state" className="grey-text">
                                State
                            </label>
                            <input type="text" id="state" className="form-control"
                                   name="state" placeholder="State" required/>
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol lg="4" className="mb-3">
                            <label htmlFor="zip" className="grey-text">
                                Zip
                            </label>
                            <input type="text" id="zip" className="form-control"
                                   name="zip" placeholder="Zip" required/>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol lg="4" className="mb-3">
                        <div className="custom-control custom-checkbox pl-3">
                            <input className="custom-control-input" type="checkbox" id="invalidCheck" required/>
                            <label className="custom-control-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </MDBCol>
                    <MDBBtn color="dark" type="submit">ORDER</MDBBtn>
                </form>
            </div>
        </>
    )
}