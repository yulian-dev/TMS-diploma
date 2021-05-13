import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {
    MDBBtn,
    MDBCollapse,
    MDBFormInline,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";
import "./Header.css";
import {useLocation} from "react-router";

export default function HeaderNav({cartCount}) {

    let location = useLocation();
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(location.pathname);
    })

    const search = () => {
        let ids = [];
        const inputText = document.getElementById('searchInput').value;
        const titles = document.querySelectorAll('.card-title');
        titles.forEach(title => {
            if (title.textContent.toLowerCase().includes(inputText.toLowerCase())) {
                ids.push(title.parentNode.getAttribute('data-id'));
            }
        })
        cardsFilter(ids);
    }

    const cardsFilter = (ids) => {
        const allCards = document.querySelectorAll('[data-card-id]');
        allCards.forEach(card => {
            const cardId = card.getAttribute('data-card-id');
            !ids.includes(cardId) ? card.style.display = 'none' : card.style.display = 'block';
        })
    }

    return (
        <>
            <MDBNavbar color="special-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">GOODS<span>4</span>HEALTHS</strong>
                </MDBNavbarBrand>
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active={path === '/'}>
                            <MDBNavLink to="/">
                                Home
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active={path === '/create'}>
                            <MDBNavLink to="/create">
                                Goods
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem className='span'>
                            <MDBNavLink to="/cart">
                                <div className="button-cart">
                                    <MDBBtn className="btn btn-light" style={{backgroundColor: "#3b5998"}}
                                            role="button">
                                        <i className="cart-icon"><FontAwesomeIcon icon={faCartPlus}/></i><span
                                        className="badge bg-danger ms-2">{cartCount}</span></MDBBtn>
                                </div>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBFormInline waves>
                                <div className="md-form my-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                           aria-label="Search" onChange={search} id='searchInput'/>
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </>
    )
}