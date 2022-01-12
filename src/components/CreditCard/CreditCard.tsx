import React, {ChangeEvent, FormEvent, useMemo, useState} from 'react';
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
import Dropdown from '../Dropdown/Dropdown';

const CreditCard = () => {
	// const [selectedMonth, setSelectedMonth] = useState(1);
	// const [selectedYear, setSelectedYear] = useState(2022);

	const dispatch = useDispatch();

	const {cardType,cardHolder,creditCardNum, expireMonth, expireYear, cvv} = useSelector((state: RootStateOrAny) => state.cardReducer);


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

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const hashCVV = encryptData(cvv);
		console.log(hashCVV)
	};

	const expYearsItems = useMemo(() => expYears, [expYears]);
	const expMonthsItems = useMemo(() => expMonths, [expMonths]);

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<Card/>

				<div className={styles.inputContainer}>
					<h4>Enter card number</h4>
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
						placeholder="Please enter your credit card number"
					/>
				</div>
				<div className={styles.inputContainer}>
					<h4>Card Holder</h4>
					<input value={cardHolder} onChange={handleFormItem} className={styles.input} name={'cardholder'} type="text"
								 placeholder="Please enter your full name" required/>
				</div>

				<div className={styles.details}>
					<div className={styles.inputContainer}>
						<h4>Exp Month</h4>
						<Dropdown name={'month'} selected={expireMonth} setSelected={handleDropdown} options={expMonthsItems}/>
					</div>
					<div className={styles.inputContainer}>
						<h4>Exp Year</h4>
						<Dropdown name={'year'} selected={expireYear} setSelected={handleDropdown} options={expYearsItems}/>
					</div>

					<div className={styles.inputContainer}>
						<h4>CVV</h4>
						<input value={cvv} onChange={handleFormItem} maxLength={3} type="password" name={'cvv'} placeholder="CVV"
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