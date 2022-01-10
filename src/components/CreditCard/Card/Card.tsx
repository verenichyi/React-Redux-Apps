import React from "react";
import {RootStateOrAny, useSelector} from "react-redux";

import styles from "./Card.module.scss";
import sticker from 'src/assets/card/chip.png';
import CardItem from "./CardItem/CardItem";

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

			<CardItem title={'Card Number'} value={creditCardNum}/>

			<div className={styles.details}>
				<CardItem title={'Card Holder'} value={cardHolder}/>
				<CardItem title={'Expiration'} value={`${expireMonth} / ${expireYear}`}/>
				<CardItem title={'CVV'} value={cvv}/>
			</div>
		</div>
	);
};

export default Card;