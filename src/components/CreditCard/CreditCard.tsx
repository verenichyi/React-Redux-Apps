import React, {ChangeEvent, FormEvent, useMemo} from 'react';
import Cleave from 'cleave.js/react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

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
import Card from './Card/Card';
import {encryptData} from '../../helpers/card';

const CreditCard = () => {
	const dispatch = useDispatch();

	const {cardType, expireMonth, expireYear, cvv} = useSelector((state: RootStateOrAny) => state.cardReducer);

	const handleType = (type: string): void => {
		dispatch(setCardType(type));

		const cardType = Object.keys(imageUrls).find((item) => item === type);

		if (cardType) dispatch(setCardTypeImage(imageUrls[type]));
	};

	const handleCardNum = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		dispatch(setCreditCardNum(value));

		if (!value.trim()) {
			dispatch(setCreditCardNum('1234 5678 9101 1112'));
		}
	};

	const handleCardHolder = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		dispatch(setCardHolder(value));

		if (!value.trim()) {
			dispatch(setCardHolder('Jason Smith'));
		}
	};

	const handleCVV = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		dispatch(setCVV(value));

		if (!value.trim()) {
			dispatch(setCVV('123'));
		}
	};

	const handleExpiration = (event: ChangeEvent<HTMLSelectElement>): void => {
		const value = event.target.value;

		switch (event.target.name) {
			case 'month':
				dispatch(setExpireMonth(value));
				break;
			case 'year':
				dispatch(setExpireYear(value))
				break;
		}
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const hashCVV = encryptData(cvv);
		console.log(hashCVV)
	};

	const cleaveOptions = {
		creditCard: true,
		onCreditCardTypeChanged: handleType,
		delimiter: ' '
	};

	const mapSelectOptions = (arr: number[]) => {
		return arr.map((item => <option key={item} value={item}>{item}</option>));
	}

	const expYearsItems = useMemo(() => mapSelectOptions(expYears), [expYears]);
	const expMonthsItems = useMemo(() => mapSelectOptions(expMonths), [expMonths]);

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<Card/>

				<div className={styles.inputContainer}>
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

				<div className={styles.details}>
					<div className={styles.inputContainer}>
						<h4>Exp Month</h4>
						<select value={expireMonth} onChange={handleExpiration} name={'month'} className={styles.input}>
							{expMonthsItems}
						</select>
					</div>
					<div className={styles.inputContainer}>
						<h4>Exp Year</h4>
						<select value={expireYear} onChange={handleExpiration} name={'year'} className={styles.input}>
							{expYearsItems}
						</select>
					</div>
					<div className={styles.inputContainer}>
						<h4>CVV</h4>
						<input onChange={handleCVV} maxLength={3} type="password" placeholder="CVV"
									 className={styles.input}
									 required/>
					</div>
				</div>

				<button className={styles.button}>{`Submit ${cardType} payment`}</button>
			</form>
		</>
	);
};

export default CreditCard;