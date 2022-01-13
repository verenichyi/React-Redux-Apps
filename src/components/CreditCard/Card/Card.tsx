import React, {ChangeEvent, useMemo} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import styles from "./Card.module.scss";
import sticker from 'src/assets/card/chip.png';
import Cleave from "cleave.js/react";
import Dropdown from "../../Dropdown/Dropdown";
import {
	setCardHolder,
	setCardType,
	setCardTypeImage,
	setCreditCardNum,
	setCVV,
	setExpireMonth, setExpireYear
} from "../../../redux/actionCreators";
import {expMonths, expYears, imageUrls} from "../../../constants/creditCard";

const Card = () => {
	const dispatch = useDispatch();

	const {
		cardType,
		cardTypeImage,
		cardHolder,
		creditCardNum,
		expireMonth,
		expireYear,
		cvv
	} = useSelector((state: RootStateOrAny) => state.cardReducer);

	const handleType = (type: string): void => {
		dispatch(setCardType(type));

		const cardType = Object.keys(imageUrls).find((item) => item === type);

		if (cardType) dispatch(setCardTypeImage(imageUrls[type]));
	};

	const handleFormItem = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
		const value = event.target.value;

		switch (event.target.name) {
			case 'cvv':
				dispatch(setCVV(value));
				if (!value.trim()) {
					dispatch(setCVV('***'));
				}
				break;

			case 'cardholder':
				dispatch(setCardHolder(value));
				break;

			case 'number':
				dispatch(setCreditCardNum(value));
				if (!value.trim()) {
					dispatch(setCreditCardNum('**** **** **** ****'));
				}
				break;
		}
	};

	const handleDropdown = (name: string, value: number): void => {
		switch (name) {
			case 'month':
				dispatch(setExpireMonth(value));
				break;

			case 'year':
				dispatch(setExpireYear(value))
		}
	};

	const expYearsItems = useMemo(() => expYears, [expYears]);
	const expMonthsItems = useMemo(() => expMonths, [expMonths]);

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<img className={styles.sticker} src={sticker} alt="Sticker"/>
				<img className={styles.logo} src={cardTypeImage} alt="Card logo"/>
			</div>
				<Cleave
					className={styles.input}
					options={{
						creditCard: true,
						onCreditCardTypeChanged: handleType,
						delimiter: ' '
					}}
					name={'number'}
					value={creditCardNum}
					onChange={handleFormItem}
					placeholder="Card number"
				/>
				<input value={cardHolder} onChange={handleFormItem} className={styles.input} name={'cardholder'} type="text"
							 placeholder="Card holder" required/>

			<div className={styles.details}>
					<div className={styles.expiration}>
						<Dropdown name={'month'} selected={expireMonth} setSelected={handleDropdown} options={expMonthsItems}/>
						<Dropdown name={'year'} selected={expireYear} setSelected={handleDropdown} options={expYearsItems}/>
					</div>
					<input value={cvv} onChange={handleFormItem} maxLength={3} type="password" name={'cvv'} placeholder="CVV"
								 className={`${styles.input} ${styles.cvv}`}
								 required/>
			</div>

		</div>
	);
};

export default Card;