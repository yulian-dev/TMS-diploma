import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderNav from "./components/Header";
import IntroCarousel from "./components/Intro";
import Footer from "./components/Footer";
import CreateBox from "./components/CreateBox";
import ShoppingCart from "./components/ShoppingCart";
import Validation from "./components/Validation";
import Jumbotron from "./components/Jumbotron";
import {HEALTHYGOODSKEY} from "./state-management/constants/index";
import {Switch} from "react-router";
import Modal from "./components/Modal";
import './App.css';

export default function App() {

    const [cartCount, setCartCount] = useState(0);
    const [purchaseSum, setPurchaseSum] = useState(0);
    const [modal, setModal] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        getCartCount();
    })

    const getCartCount = () => {
        const dataFromLS = localStorage.getItem(HEALTHYGOODSKEY);
        if (dataFromLS) {
            let number = 0;
            const dataLS = JSON.parse(dataFromLS);
            for (let key in dataLS) {
                const item = dataLS[key];
                number += item.count
            }
            setCartCount(number);
        } else {
            setCartCount(0);
        }
    }

    const getPurchaseSum = () => {
        let sum = 0;
        const purchaseFromLS = localStorage.getItem(HEALTHYGOODSKEY);
        const purchaseObj = JSON.parse(purchaseFromLS);
        for (let key in purchaseObj) {
            let purchase = purchaseObj[key];
            sum += (purchase.count * +purchase.price.replace('$', '')
                .replace(',', '.'))
        }
        setPurchaseSum(Math.round(sum * 100) / 100);
    }

    const toggleModal = (modal) => {
        setModal(!modal);
        if (modal) {
            getCartCount();
            setRedirect(true);
        }
    }

    return (
        <>
            <Router>
                <HeaderNav cartCount={cartCount}/>
                <Switch>
                    <Route exact={true} path="/">
                        <IntroCarousel/>
                    </Route>
                    <Route path="/create">
                        <CreateBox cartCounter={getCartCount}/>
                    </Route>
                    <Route path="/cart">
                        <ShoppingCart purchaseSum={purchaseSum} cartCounter={getCartCount}
                                      getPurchaseSum={getPurchaseSum}/>
                        <Validation toggle={toggleModal} redirect={redirect} getPurchaseSum={getPurchaseSum}/>
                        <Jumbotron/>
                        <Modal modal={modal} toggle={toggleModal}/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}