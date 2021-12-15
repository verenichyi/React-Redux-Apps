import React, {useEffect, useState} from 'react';

import styles from './search-input.module.scss';

const SearchInput = ({setSearchValue, mode}) => {
	const [value, setValue] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (mode === 'ENTER_PRESSED') {
			setSearchValue(value);
		}
	}

	const handleChange = (event) => {
		const value = event.target.value;

		setValue(value);

		if (mode === 'IMMEDIATE') {
			setSearchValue(value);
		}
	}

	useEffect(() => {
		if (mode === 'ON_STOP_TYPING') {
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