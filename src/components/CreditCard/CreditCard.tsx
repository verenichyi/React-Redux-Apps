import React, {ChangeEvent, useState} from "react";
import Cleave from 'cleave.js/react';

import './CreditCard.scss';
import {imageUrls} from "../../constants/creditCard";

const CreditCard = () => {
    const [creditCardNum, setCreditCardNum] = useState('1234 5678 9101 1112');
    const [cardType, setCardType] = useState('');
    const [cardHolder, setCardHolder] = useState('Henry Cavill');
    const [expireMonth, setExpireMonth] = useState('MM');
    const [expireYear, setExpireYear] = useState('YYYY');
    const [cvv, setCVV] = useState('123');
    const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');

    const handleNum = (event: ChangeEvent<HTMLInputElement>): void => {
        setCreditCardNum(event.target.value);
    }

    const handleType = (type: string): void => {
        setCardType(type);

        if (type === "visa") {
            setCardTypeUrl(imageUrls[0]);
        } else if (type === "mastercard") {
            setCardTypeUrl(imageUrls[1]);
        } else if (type === "discover") {
            setCardTypeUrl(imageUrls[2]);
        } else if (type === "amex") {
            setCardTypeUrl(imageUrls[3]);
        } else if (type === "diners") {
            setCardTypeUrl(imageUrls[4])
        } else if (type === "jcb") {
            setCardTypeUrl(imageUrls[5]);
        }
    }

    const handleCardHolder = (event: ChangeEvent<HTMLInputElement>) => {
        setCardHolder(event.target.value);
    }

    const handleExpMonth = (event: ChangeEvent<HTMLSelectElement>) => {
        setExpireMonth(event.target.value);
    }

    const handleExpYear = (event: ChangeEvent<HTMLSelectElement>) => {
        setExpireYear(event.target.value);
    }

    const handleCVV = (event: ChangeEvent<HTMLInputElement>) => {
        setCVV(event.target.value);
    }

    return (
        <div className="credit-card">
            <form className="form">
                <div className="card">
                    <div className="header">
                        <div className="sticker"/>
                        <div>
                            <img className="logo" src={cardTypeUrl} alt="Card logo"/>
                        </div>
                    </div>
                    <div className="card-number">
                        <div className="card-number-title">Card Number</div>
                        <div className="card-number-value">{creditCardNum}</div>
                    </div>
                    <div className="details">
                        <div className="card-holder">
                            <div className="card-holder-title">Card Holder</div>
                            <div className="card-holder-value">{cardHolder}</div>
                        </div>
                        <div className="expiration">
                            <div className="expiration-title">Expiration</div>
                            <div className="expiration-value">{expireMonth} / {expireYear}</div>
                        </div>
                        <div className="cvv">
                            <div className="cvv-title">CVV</div>
                            <div className="cvv-value">{cvv}</div>
                        </div>
                    </div>
                </div>


                <div className="input-container mt">
                    <h4>Enter card number</h4>
                    <Cleave
                        options={{
                            creditCard: true,
                            onCreditCardTypeChanged: handleType,
                            delimiter: " "
                        }}
                        onChange={handleNum}
                        placeholder="Please enter your credit card number"
                    />
                </div>

                <div className="input-container">
                    <h4>Card Holder</h4>
                    <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required/>
                </div>

                <div className="input-grp">
                    <div className="input-container">
                        <h4>Expiration Year</h4>
                        <select value={expireYear} onChange={handleExpYear}>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <h4>Expiration Month</h4>
                        <select value={expireMonth} onChange={handleExpMonth}>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <h4>CVV</h4>
                        <input onChange={handleCVV} type="password" placeholder="CVV" required/>
                    </div>
                </div>

                <button>{`Submit ${cardType} payment`}</button>
            </form>
        </div>
    );
};

export default CreditCard;