import React, {ChangeEvent} from 'react';
import Cleave from 'cleave.js/react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import styles from './CreditCard.module.scss';
import {expMonths, expYears, imageUrls} from 'src/constants/creditCard';

import {
    setCardHolder,
    setCardType,
    setCardTypeImage,
    setCreditCardNum,
    setCVV,
    setExpireMonth, setExpireYear
} from 'src/redux/actionCreators';

const CreditCard = () => {
    const dispatch = useDispatch();

    const creditCardNum = useSelector((state: RootStateOrAny) => state.cardReducer.creditCardNum);
    const cardType = useSelector((state: RootStateOrAny) => state.cardReducer.cardType);
    const cardTypeImage = useSelector((state: RootStateOrAny) => state.cardReducer.cardTypeImage);
    const cardHolder = useSelector((state: RootStateOrAny) => state.cardReducer.cardHolder);
    const expireMonth = useSelector((state: RootStateOrAny) => state.cardReducer.expireMonth);
    const expireYear = useSelector((state: RootStateOrAny) => state.cardReducer.expireYear);
    const cvv = useSelector((state: RootStateOrAny) => state.cardReducer.cvv);

    const expYearsItems = expYears.map((item => <option key={+item} value={+item}>{+item}</option>));
    const expMonthsItems = expMonths.map((item => <option key={+item} value={item}>{+item}</option>));

    const handleType = (type: string): void => {
        dispatch(setCardType(type));

        const cardType: string | undefined = Object.keys(imageUrls).find((item) => item === type);

        if (cardType) dispatch(setCardTypeImage(imageUrls[type]));
    };

    const handleCardNum = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        dispatch(setCreditCardNum(value));

        if (!value.trim()) dispatch(setCreditCardNum('1234 5678 9101 1112'));
    };

    const handleCardHolder = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        dispatch(setCardHolder(value));

        if (!value.trim()) dispatch(setCardHolder('Henry Cavill'));
    };

    const handleCVV = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        dispatch(setCVV(value));

        if (!value.trim()) dispatch(setCVV('123'));
    };

    const handleExpMonth = (event: ChangeEvent<HTMLSelectElement>): void => dispatch(setExpireMonth(event.target.value));

    const handleExpYear = (event: ChangeEvent<HTMLSelectElement>): void => dispatch(setExpireYear(event.target.value));

    const cleaveOptions = {
        creditCard: true,
        onCreditCardTypeChanged: handleType,
        delimiter: ' '
    };

    return (
        <div className={styles.creditCard}>
            <form className={styles.form}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.sticker}/>
                        <div>
                            <img className={styles.logo} src={cardTypeImage} alt="Card logo"/>
                        </div>
                    </div>
                    <div className={styles.cardNumber}>
                        <div className={styles.title}>Card Number</div>
                        <div className={`${styles.cardNumber_value} ${styles.value}`}>{creditCardNum}</div>
                    </div>
                    <div className={styles.details}>
                        <div>
                            <div className={styles.title}>Card Holder</div>
                            <div className={styles.value}>{cardHolder}</div>
                        </div>
                        <div>
                            <div className={styles.title}>Expiration</div>
                            <div className={styles.value}>{expireMonth} / {expireYear}</div>
                        </div>
                        <div>
                            <div className={styles.title}>CVV</div>
                            <div className={styles.value}>{cvv}</div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.inputContainer} ${styles.mt}`}>
                    <h4>Enter card number</h4>
                    <Cleave
                        className={styles.input}
                        options={cleaveOptions}
                        onChange={handleCardNum}
                        placeholder="Please enter your credit card number"
                    />
                </div>

                <div className={styles.inputContainer}>
                    <h4>Card Holder</h4>
                    <input onChange={handleCardHolder} className={styles.input} type="text"
                           placeholder="Please enter your full name" required/>
                </div>

                <div className={styles.inputGrp}>
                    <div className={styles.inputContainer}>
                        <h4>Expiration Year</h4>
                        <select value={expireYear} onChange={handleExpYear} className={styles.input}>
                            {expYearsItems}
                        </select>
                    </div>
                    <div className={styles.inputContainer}>
                        <h4>Expiration Month</h4>
                        <select value={expireMonth} onChange={handleExpMonth} className={styles.input}>
                            {expMonthsItems}
                        </select>
                    </div>
                    <div className={styles.inputContainer}>
                        <h4>CVV</h4>
                        <input onChange={handleCVV} type="password" placeholder="CVV" className={styles.input}
                               required/>
                    </div>
                </div>

                <button className={styles.button}>{`Submit ${cardType} payment`}</button>
            </form>
        </div>
    );
};

export default CreditCard;