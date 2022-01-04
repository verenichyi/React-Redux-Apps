import React, {ChangeEvent, useState} from 'react';
import Cleave from 'cleave.js/react';

import './CreditCard.scss';
import {expMonths, expYears, imageUrls} from '../../constants/creditCard';

const CreditCard = () => {
	const [creditCardNum, setCreditCardNum] = useState('1234 5678 9101 1112');
	const [cardType, setCardType] = useState('');
	const [cardHolder, setCardHolder] = useState('Henry Cavill');
	const [expireMonth, setExpireMonth] = useState('MM');
	const [expireYear, setExpireYear] = useState('YYYY');
	const [cvv, setCVV] = useState('123');
	const [cardTypeImage, setCardTypeImage] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');

	const expYearsItems = expYears.map((item => <option key={+item} value={+item}>{+item}</option>));
	const expMonthsItems = expMonths.map((item => <option key={+item} value={+item}>{+item}</option>));

	const handleType = (type: string): void => {
		setCardType(type);

		const cardType: string | undefined = Object.keys(imageUrls).find((item) => item === type);

		if (cardType)
			setCardTypeImage(imageUrls[type]);
	}

	const handleCardNum = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setCreditCardNum(value);

		if(!value.trim()){
			setCreditCardNum('1234 5678 9101 1112');
		}
	}

	const handleCardHolder = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setCardHolder(value);

		if(!value.trim()){
			setCardHolder('Henry Cavill');
		}
	}

	const handleExpMonth = (event: ChangeEvent<HTMLSelectElement>): void => setExpireMonth(event.target.value);

	const handleExpYear = (event: ChangeEvent<HTMLSelectElement>): void => setExpireYear(event.target.value);

	const handleCVV = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setCVV(value);

		if(!value.trim()){
			setCVV('123');
		}
	}

	const cleaveOptions = {
		creditCard: true,
		onCreditCardTypeChanged: handleType,
		delimiter: ' '
	}

	return (
		<div className="credit-card">
			<form className="form">
				<div className="card">
					<div className="header">
						<div className="sticker"/>
						<div>
							<img className="logo" src={cardTypeImage} alt="Card logo"/>
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
						options={cleaveOptions}
						onChange={handleCardNum}
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
							{expYearsItems}
						</select>
					</div>
					<div className="input-container">
						<h4>Expiration Month</h4>
						<select value={expireMonth} onChange={handleExpMonth}>
							{expMonthsItems}
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