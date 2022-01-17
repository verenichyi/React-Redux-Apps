import { generateNumbersArray } from '../helpers/card';

import visa from 'src/assets/card/visa.png';
import mastercard from 'src/assets/card/mastercard.png';
import discover from 'src/assets/card/discover.png';
import amex from 'src/assets/card/amex.png';
import diners from 'src/assets/card/diners.png';
import jcb from 'src/assets/card/jcb.png';

export const imageUrls: { [key: string]: string } = {
  visa,
  mastercard,
  discover,
  amex,
  diners,
  jcb,
};

export const expYears: Array<number> = generateNumbersArray(2022, 2030);

export const expMonths: Array<number> = generateNumbersArray(1, 12);

export const formItems = {
  cardNumber: {
    name: 'number',
    placeholder: 'Card Number',
  },
  cardHolder: {
    name: 'cardholder',
    placeholder: 'Card Holder',
  },
  cvv: {
    name: 'cvv',
    placeholder: 'CVV',
  },
};

export const errorTexts = {
  cardNumber: 'Invalid card number',
  cardHolder: 'Invalid holder name',
  allFields: 'Please complete all fields',
};

export const formValuePatterns = {
  cardholder:
    /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})\s([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
  cardNumber:
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
};
