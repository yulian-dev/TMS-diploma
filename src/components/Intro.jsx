import React from "react";
import {MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from
        "mdbreact";
import './Intro.css';

export default function IntroCarousel() {
    return (
        <>
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="/img/create.jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">CREATE a gift box by yourself</h3></MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="/img/deliver.jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">We'll DELIVER it on time</h3>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="/img/give.jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">MAKE someone happier</h3>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        </>
    )
}