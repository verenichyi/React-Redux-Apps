import React from "react";
import {RootStateOrAny, useSelector} from "react-redux";

import styles from "./Card.module.scss";
import sticker from 'src/assets/card/chip.png';

const Card = () => {
	const {
		creditCardNum,
		cardTypeImage,
		cardHolder,
		cvv,
		expireMonth,
		expireYear
	} = useSelector((state: RootStateOrAny) => state.cardReducer);

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<img className={styles.sticker} src={sticker} alt="Sticker"/>
				<img className={styles.logo} src={cardTypeImage} alt="Card logo"/>
			</div>
			<div className={styles.cardNumber}>
				<h5 className={styles.title}>Card Number</h5>
				<p className={styles.value}>{creditCardNum}</p>
			</div>
			<div className={styles.details}>
				<div>
					<h5 className={styles.title}>Card Holder</h5>
					<p className={styles.value}>{cardHolder}</p>
				</div>
				<div>
					<h5 className={styles.title}>Expiration</h5>
					<p className={styles.value}>{expireMonth} / {expireYear}</p>
				</div>
				<div>
					<h5 className={styles.title}>CVV</h5>
					<p className={styles.value}>{cvv}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;