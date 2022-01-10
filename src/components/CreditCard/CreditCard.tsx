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
				if (!value.trim()) {
					dispatch(setCardHolder('Name Surname'));
				}
				break;

			case 'number':
				dispatch(setCreditCardNum(value));
				if (!value.trim()) {
					dispatch(setCreditCardNum('**** **** **** ****'));
				}
				break;

			case 'month':
				dispatch(setExpireMonth(value));
				if (!value.trim()) {
					dispatch(setExpireMonth('MM'));
				}
				break;

			case 'year':
				dispatch(setExpireYear(value))
				if (!value.trim()) {
					dispatch(setExpireYear('YYYY'));
				}
		}
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const hashCVV = encryptData(cvv);
		console.log(hashCVV)
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
						options={{
							creditCard: true,
							onCreditCardTypeChanged: handleType,
							delimiter: ' '
						}}
						name={'number'}
						onChange={handleFormItem}
						placeholder="Please enter your credit card number"
					/>
				</div>
				<div className={styles.inputContainer}>
					<h4>Card Holder</h4>
					<input onChange={handleFormItem} className={styles.input} name={'cardholder'} type="text"
								 placeholder="Please enter your full name" required/>
				</div>

				<div className={styles.details}>
					<div className={styles.inputContainer}>
						<h4>Exp Month</h4>
						<select value={expireMonth} onChange={handleFormItem} name={'month'} className={styles.input}>
							{expMonthsItems}
						</select>
					</div>
					<div className={styles.inputContainer}>
						<h4>Exp Year</h4>
						<select value={expireYear} onChange={handleFormItem} name={'year'} className={styles.input}>
							{expYearsItems}
						</select>
					</div>
					<div className={styles.inputContainer}>
						<h4>CVV</h4>
						<input onChange={handleFormItem} maxLength={3} type="password" name={'cvv'} placeholder="CVV"
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