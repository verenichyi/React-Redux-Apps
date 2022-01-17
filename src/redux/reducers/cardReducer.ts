import { handleActions } from 'redux-actions';

import { cardActions } from 'src/redux/actionCreators';
import visa from 'src/assets/card/visa.png';
import { errorTexts } from 'src/constants/creditCard';

interface State {
  creditCardNum: string;
  cardType: string;
  cardTypeImage: string;
  cardHolder: string;
  expireMonth: number;
  expireYear: number;
  cvv: null;
  isCardNumValid: boolean;
  isCardHolderValid: boolean;
  isCVVValid: boolean;
  isAllFieldsFilled: boolean;
  errorText: string;
}

const initialState = {
  creditCardNum: '',
  cardType: '',
  cardTypeImage: visa,
  cardHolder: '',
  expireMonth: 1,
  expireYear: 2022,
  cvv: '',
  isCardNumValid: true,
  isCardHolderValid: true,
  isAllFieldsFilled: true,
  errorText: errorTexts.allFields,
};

const cardReducer = handleActions(
  {
    [cardActions.setCreditCardNum]: (
      state: State,
      { payload }: { payload: string }
    ) => ({
      ...state,
      creditCardNum: payload,
    }),
    [cardActions.setCardType]: (
      state: State,
      { payload }: { payload: string }
    ) => ({ ...state, cardType: payload }),
    [cardActions.setCardTypeImage]: (
      state: State,
      { payload }: { payload: string }
    ) => ({
      ...state,
      cardTypeImage: payload,
    }),
    [cardActions.setCardHolder]: (
      state: State,
      { payload }: { payload: string }
    ) => ({ ...state, cardHolder: payload }),
    [cardActions.setExpireMonth]: (
      state: State,
      { payload }: { payload: number }
    ) => ({ ...state, expireMonth: payload }),
    [cardActions.setExpireYear]: (
      state: State,
      { payload }: { payload: number }
    ) => ({ ...state, expireYear: payload }),
    [cardActions.setCVV]: (state: State, { payload }: { payload: number }) => ({
      ...state,
      cvv: payload,
    }),
    [cardActions.setIsCardNumValid]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isCardNumValid: payload,
    }),
    [cardActions.setIsCardHolderValid]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isCardHolderValid: payload,
    }),
    [cardActions.setIsAllFieldsFilled]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isAllFieldsFilled: payload,
    }),
    [cardActions.setErrorText]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      errorText: payload,
    }),
  },
  initialState
);

export default cardReducer;
