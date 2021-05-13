import React from "react";
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from 'mdbreact';

export default function Modal({modal, toggle}) {

    return (
        <>
            <MDBContainer>
                <MDBModal isOpen={modal}>
                    <MDBModalHeader>Thank you for choosing GOODS4THINGS!</MDBModalHeader>
                    <MDBModalBody>
                        We've received your order and will get started on it right now. You can expect receive a
                        conformation email soon :)
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="success" onClick={toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </>
    )
}