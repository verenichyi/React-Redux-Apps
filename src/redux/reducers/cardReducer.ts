import {handleActions} from 'redux-actions';
import {
	setCardHolder,
	setCardType,
	setCardTypeImage,
	setCreditCardNum, setCVV,
	setExpireMonth,
	setExpireYear
} from '../actionCreators';

import visa from 'src/assets/card/visa.png';

interface State {
	creditCardNum: string,
	cardType: string,
	cardTypeImage: string,
	cardHolder: string,
	expireMonth: number,
	expireYear: number,
	cvv: null,
}

const initialState = {
	creditCardNum: '',
	cardType: '',
	cardTypeImage: visa,
	cardHolder: '',
	expireMonth: 1,
	expireYear: 2022,
	cvv: '',
};

const cardReducer = handleActions({
	[setCreditCardNum]: (state: State, {payload}: { payload: string }) => ({...state, creditCardNum: payload}),
	[setCardType]: (state: State, {payload}: { payload: string }) => ({...state, cardType: payload}),
	[setCardTypeImage]: (state: State, {payload}: { payload: string }) => ({...state, cardTypeImage: payload}),
	[setCardHolder]: (state: State, {payload}: { payload: string }) => ({...state, cardHolder: payload}),
	[setExpireMonth]: (state: State, {payload}: { payload: number }) => ({...state, expireMonth: payload}),
	[setExpireYear]: (state: State, {payload}: { payload: number }) => ({...state, expireYear: payload}),
	[setCVV]: (state: State, {payload}: { payload: number }) => ({...state, cvv: payload}),
}, initialState);

export default cardReducer;