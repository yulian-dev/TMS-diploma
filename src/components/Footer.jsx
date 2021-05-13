import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import './Footer.css';

export default function Footer() {
    return (
        <>
            <MDBFooter color="special-color" className="font-small pt-4">
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a
                        href="https://www.instagram.com/youlian.art/?igshid=114sg4n06roff"
                        target="_blank"> @youlian.art </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </>
    )
}