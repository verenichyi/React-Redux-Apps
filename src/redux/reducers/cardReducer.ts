import { handleActions } from 'redux-actions';
import { cardActions } from '../actionCreators';

import visa from 'src/assets/card/visa.png';

interface State {
  creditCardNum: string;
  cardType: string;
  cardTypeImage: string;
  cardHolder: string;
  expireMonth: number;
  expireYear: number;
  cvv: null;
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
  },
  initialState
);

export default cardReducer;
