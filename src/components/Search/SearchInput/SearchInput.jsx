import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './search-input.module.scss';

import {setSearchInputValue, setSearchValue} from '../../../redux/actionCreators';
import modes from '../../../constants/searchInput';

const SearchInput = () => {
	const mode = useSelector(state => state?.searchReducer.mode);
	const value = useSelector(state => state?.searchReducer.searchInputValue);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (mode === modes.enterPressed.name) {
			setSearchValue(value);
		}
	}

	const handleChange = (event) => {
		const value = event.target.value;

		dispatch(setSearchInputValue(value));

		if (mode === modes.immediate.name) {
			dispatch(setSearchValue(value));
		}
	}

	useEffect(() => {
		if (mode === modes.stopTyping.name) {
			const timeoutId = setTimeout(() => {
				setSearchValue(value);
			}, 500);

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