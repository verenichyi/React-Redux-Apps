import React from "react";
import {RootStateOrAny, useSelector} from "react-redux";

import styles from "./Card.module.scss";

const Card = () => {
    const creditCardNum = useSelector((state: RootStateOrAny) => state.cardReducer.creditCardNum);
    const cardTypeImage = useSelector((state: RootStateOrAny) => state.cardReducer.cardTypeImage);
    const cardHolder = useSelector((state: RootStateOrAny) => state.cardReducer.cardHolder);
    const cvv = useSelector((state: RootStateOrAny) => state.cardReducer.cvv);
    const expireMonth = useSelector((state: RootStateOrAny) => state.cardReducer.expireMonth);
    const expireYear = useSelector((state: RootStateOrAny) => state.cardReducer.expireYear);

    return (
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
    );
};

export default Card;