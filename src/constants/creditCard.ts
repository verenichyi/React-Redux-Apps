import {generateNumbersArray} from '../helpers/card';

import visa from 'src/assets/card/visa.png';
import mastercard from 'src/assets/card/mastercard.png';
import discover from 'src/assets/card/discover.png';
import amex from 'src/assets/card/amex.svg';
import diners from 'src/assets/card/diners.png';
import jcb from 'src/assets/card/jcb.png';

interface IImages {
	[key: string]: string,
}

export const imageUrls: IImages = {
	visa,
	mastercard,
	discover,
	amex,
	diners,
	jcb
}

export const expYears: Array<number> = generateNumbersArray(2022, 2030);

export const expMonths: Array<number> = generateNumbersArray(1, 12);

export const formItems = {
	cardNumber: {
		name: 'number',
		placeholder: 'Card Number'
	},
	cardHolder: {
		name: 'cardholder',
		placeholder: 'Card Holder'
	},
	cvv: {
		name: 'cvv',
		placeholder: 'CVV'
	},
}