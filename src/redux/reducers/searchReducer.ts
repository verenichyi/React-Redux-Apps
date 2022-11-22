import { handleActions } from 'redux-actions';

import {
  setMode,
  setSearchValue,
  setSearchInputValue,
} from '../actionCreators';
import modes from '../../constants/searchInput';
import { ISearchState } from '../../interfaces';

const initialState: ISearchState = {
  searchValue: '',
  mode: modes.immediate.name,
  searchInputValue: '',
};

type StringPayload = {
  payload: string;
};

const searchReducer = handleActions(
  {
    [setSearchValue]: (state: ISearchState, { payload }: StringPayload) => ({
      ...state,
      searchValue: payload,
    }),
    [setMode]: (state: ISearchState, { payload }: StringPayload) => ({
      ...state,
      mode: payload,
    }),
    [setSearchInputValue]: (state: ISearchState, { payload }: StringPayload) => ({
      ...state,
      searchInputValue: payload,
    }),
  },
  initialState
);

export default searchReducer;
