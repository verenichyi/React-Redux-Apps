import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import {RootStateOrAny} from 'react-redux';

import styles from './search-input.module.scss';

import {setSearchInputValue, setSearchValue} from '../../../redux/actionCreators';
import modes from '../../../constants/searchInput';
import {useAppDispatch, useAppSelector} from '../../../hooks';

const SearchInput = () => {
	const mode = useAppSelector((state: RootStateOrAny) => state.searchReducer.mode);
	const value = useAppSelector((state: RootStateOrAny) => state.searchReducer.searchInputValue);
	const dispatch = useAppDispatch();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (mode === modes.enterPressed.name) dispatch(setSearchValue(value));
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		dispatch(setSearchInputValue(value));

		if (mode === modes.immediate.name) dispatch(setSearchValue(value));
	}

	useEffect(() => {
		if (mode === modes.stopTyping.name) {
			const timeoutId = setTimeout(() => dispatch(setSearchValue(value)), 500);

			return () => clearTimeout(timeoutId);
		}
	}, [value]);

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} value={value} className={styles.input} type="text" placeholder={'Search'}/>
		</form>
	)
};

export default SearchInput;