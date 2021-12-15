import React, {useState} from 'react';

import SearchInput from './SearchInput/SearchInput';
import SearchList from './SearchList/SearchList';
import ModeLink from './ModeLink/ModeLink';

import styles from './search.module.scss';
import modes from '../../constants/searchInput';

const Search = () => {
	const [searchValue,setSearchValue] = useState('');
	const [mode, setMode] = useState('IMMEDIATE');

	const modeLinks = modes.map((item, index)=> <ModeLink key={index} setMode={setMode} currentMode={mode} mode={item.name}>{item.title}</ModeLink>);

	return (
		<div className={styles.search}>
			<div className={styles.modeLinkWrapper}>{modeLinks}</div>
			<SearchInput setSearchValue={setSearchValue} mode={mode}/>
			<SearchList searchValue={searchValue}/>
		</div>
	)
};

export default Search;