import React, {useEffect} from "react";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {HEALTHYGOODSKEY} from "../state-management/constants/index";
import './ShoppingCart.css';

export default function ShoppingCart({cartCounter, purchaseSum, getPurchaseSum}) {

    useEffect(() => {
        getPurchaseSum();
    }, [])

    const getDataFromLS = () => {
        const purchaseFromLS = localStorage.getItem(HEALTHYGOODSKEY);
        return JSON.parse(purchaseFromLS);
    }

    const updateData = () => {
        cartCounter();
        getPurchaseSum();
    }

    const minusClick = event => {
        const purchaseObj = getDataFromLS();
        const purchaseId = event.target.getAttribute('data-id');
        for (let key in purchaseObj) {
            if (key === purchaseId) {
                let purchase = purchaseObj[key];
                purchase.count -= 1;
            }
        }
        localStorage.setItem(HEALTHYGOODSKEY, JSON.stringify(purchaseObj));
        updateData();
    }

    const plusClick = event => {
        const purchaseObj = getDataFromLS();
        const purchaseId = event.target.getAttribute('data-id');
        for (let key in purchaseObj) {
            if (key === purchaseId) {
                let purchase = purchaseObj[key];
                purchase.count += 1;
            }
        }
        localStorage.setItem(HEALTHYGOODSKEY, JSON.stringify(purchaseObj));
        updateData();
    }

    const getPurchaseRow = (id, name, description, price, count) => {
        return {
            id, name, description,
            'quantity': <div className="def-number-input number-input">
                <MDBBtn type="button" data-id={id} color="dark" disabled={count < 2} data-type="minus"
                        onClick={minusClick}>-</MDBBtn>
                <input className="input-number" name="quantity" value={count} min={1}
                       onChange={() => console.log('change')} type="text"/>
                <MDBBtn type="button" data-id={id} color="dark" data-type="plus"
                        onClick={plusClick}>+</MDBBtn>
            </div>,
            'price': '$ ' + (Math.round((+price.replace('$', '').replace(',', '.') * count) * 100) / 100)
        }
    }

    const purchaseList = () => {
        const purchaseArr = [];
        const purchaseObj = getDataFromLS();
        for (let key in purchaseObj) {
            let purchase = purchaseObj[key];
            purchaseArr.push(getPurchaseRow(key, purchase.purchaseName, purchase.description,
                purchase.price, purchase.count));
        }
        return purchaseArr;
    }

    const purchases = purchaseList();

    const columns = [
        {
            label: '#',
            field: 'id',
            sort: 'asc'
        },
        {
            label: 'Name',
            field: 'name',
            sort: 'asc'
        },
        {
            label: 'Description',
            field: 'description',
            sort: 'asc'
        },
        {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc'
        },
        {
            label: 'Price',
            field: 'price',
            sort: 'asc'
        }
    ];

    return (
        <>
            <MDBTable className="container-table" btn>
                <MDBTableHead columns={columns}/>
                <MDBTableBody rows={purchases}/>
                <MDBTableBody>
                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td>$ {purchaseSum}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </>
    )
}