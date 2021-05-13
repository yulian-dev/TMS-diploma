import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBIcon,
    MDBRow,
    MDBView
} from 'mdbreact';
import './CreateBox.css';
import {HEALTHYGOODSKEY} from "../state-management/constants/index";

export default function CreateBox({cartCounter}) {

    const addToLS = (event) => {
        const card = event.target.parentElement;
        const price = card.getElementsByTagName('h5')[0].textContent;
        const purchaseName = card.getElementsByTagName('h4')[0].textContent;
        const description = card.getElementsByTagName('p')[0].textContent;
        const purchaseId = card.getAttribute('data-id');
        const purchases = {
            [purchaseId]: {
                price,
                purchaseName,
                description,
                count: 1
            }
        };

        const purchaseFromLS = localStorage.getItem(HEALTHYGOODSKEY);
        if (purchaseFromLS) {
            const purchaseLS = JSON.parse(purchaseFromLS);
            const purchase = purchaseLS[purchaseId];
            if (purchase) {
                purchase.count += 1
                localStorage.setItem(HEALTHYGOODSKEY, JSON.stringify(purchaseLS));
            } else {
                purchaseLS[purchaseId] = {
                    price,
                    purchaseName,
                    description,
                    count: 1
                }
                localStorage.setItem(HEALTHYGOODSKEY, JSON.stringify(purchaseLS));
            }
        } else {
            localStorage.setItem(HEALTHYGOODSKEY, JSON.stringify(purchases));
        }
        cartCounter();
    }

    return (
        <>
            <MDBRow>
                <MDBCol md='4' data-card-id='1'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/01.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='1'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $25,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Makeup kit by KKW
                            </MDBCardTitle>
                            <MDBCardText>
                                Create your own Custom Body Bundle by choosing the shades of Body Foundation, Body
                                Shimmer, and Setting Powder
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='2'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/02.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='2'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $3,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                ELEMIS Superfood
                            </MDBCardTitle>
                            <MDBCardText>
                                Facing Wash deeply cleanses the skin and refreshes it. Natural herbal oils: broccoli
                                seeds, avocado seeds and pumpkin seeds
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='3'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/03.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='3'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $5,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Orange Blossom
                            </MDBCardTitle>
                            <MDBCardText>
                                Made from 100% vegetal oils, this liquid soap is made in cauldrons following the purest
                                Marseille tradition
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='4'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/04.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='4'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $1,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Amazzonite Tea
                            </MDBCardTitle>
                            <MDBCardText>
                                A mint relative with a lemony fragrance, lemon balm is a widely used treatment for
                                sleeplessness, anxiety, and depression
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='5'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/05.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='5'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $6,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Bamboo Toothbrush
                            </MDBCardTitle>
                            <MDBCardText>
                                Bamboo toothbrush made from natural sustainable Bamboo farms, our product is 100%
                                Natural
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='6'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/06.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='6'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $0,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Yuzu Sparkling Juice
                            </MDBCardTitle>
                            <MDBCardText>
                                Sparkling Yuzu juice is made with hand-picked Yuzu from Shikoku Island, Hyogo mountain
                                water and organic sugar cane
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='7'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/07.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='7'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $1,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                G&H Nourish+™ Hand Cream
                            </MDBCardTitle>
                            <MDBCardText>
                                Helps restore and improve skin so hands look healthy, feel soft and conditioned – all
                                while protecting them from environmental damage
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='8'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/08.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='8'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $1,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Wild Orange® Oil
                            </MDBCardTitle>
                            <MDBCardText>
                                Invigorating Blend merges the benefits of citrus essential oils, expertly
                                combining the powerful essences of Lemon and Grapefruit
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='9'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/09.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='9'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $15,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Mount Lai Gua Sha
                            </MDBCardTitle>
                            <MDBCardText>
                                Gua sha has a multitude of benefits as promotes lymphatic drainage, reduces puffiness
                                and fluid buildup and relieves facial and jaw tension
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='10'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/10.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='10'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $4,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Mega Matcha
                            </MDBCardTitle>
                            <MDBCardText>
                                Mega Matcha blends the highest quality ceremonial grade matcha with adaptogens maca +
                                ashwagandha
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='11'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/11.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='11'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $4,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Ancient Omegas
                            </MDBCardTitle>
                            <MDBCardText>
                                Ancient Omegas provides a powerful blend of wild harvest fish oil plus
                                organic chia seed oil to support healthy cognitive function
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='12'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/12.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='12'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $9,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                My Life Journal
                            </MDBCardTitle>
                            <MDBCardText>
                                My Life Journal is a 13-week guided journal carefully created to support you in
                                designing a life that is true to you
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='13'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/13.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='13'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $3,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Life is good. Mug
                            </MDBCardTitle>
                            <MDBCardText>
                                Order up! The classic customer favorite is back and bigger than ever (15 oz), dishwasher
                                and microwave safe
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='14'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/14.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='14'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $5,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Quokka Bottle
                            </MDBCardTitle>
                            <MDBCardText>
                                Be water, my friend! Quokka Bottle easily adapts to any lifestyle, whether you are on
                                the
                                beach or in the mountains
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='15'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/15.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='15'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $99,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Apple Watch Series 3 38mm
                            </MDBCardTitle>
                            <MDBCardText>
                                IOS Interaction, Aluminum, Touchscreen, Screen Technology: OLED, Waterproof, Heart Rate:
                                Built-in, Physical Activity Monitoring
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='16'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/16.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='16'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $5,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                The Little Book of Hygge
                            </MDBCardTitle>
                            <MDBCardText>
                                The Little Book of Hygge introduces you to this cornerstone of Danish life, and offers
                                advice and ideas on incorporating it into your own life
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='17'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/17.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='17'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $0,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Kombucha
                            </MDBCardTitle>
                            <MDBCardText>
                                A tonic drink made from natural ingredients. Kombucha contains fermented tea, artesian
                                water and kombucha
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='18'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/18.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='18'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $15,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Jade Roller & Gua Sha Set
                            </MDBCardTitle>
                            <MDBCardText>
                                Essential Beauty Set - a facial skin massager roller for face, body, eyes, neck will
                                cool, tighten, relax
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='19'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/19.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='19'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $5,99
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Kombucha
                            </MDBCardTitle>
                            <MDBCardText>
                                Set of tonic drinks made from natural ingredients. Kombucha contains fermented tea,
                                artesian
                                water and kombucha
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4' data-card-id='20'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='/img/products/20.jpg'
                                alt='food'
                            />
                        </MDBView>
                        <MDBCardBody data-id='20'>
                            <h5 className='pink-text'>
                                <MDBIcon icon='utensils'/> $3,45
                            </h5>
                            <MDBCardTitle className='font-weight-bold'>
                                Black Water Bottle
                            </MDBCardTitle>
                            <MDBCardText>
                                Perfect for ensuring you stay hydrated, the time markers on the side of this water
                                bottle help you track your daily water intake
                            </MDBCardText>
                            <MDBBtn onClick={addToLS} color='unique'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    )
}