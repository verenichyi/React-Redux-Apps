import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';

import SearchInput from './SearchInput/SearchInput';
import SearchList from './SearchList/SearchList';
import ModeLink from './ModeLink/ModeLink';

import styles from './search.module.scss';
import modes from '../../constants/searchInput';

const Search = () => {
    const mode: string = useSelector((state: RootStateOrAny) => state.searchReducer.mode);

    const modeLinks = Object.values(modes).map((item: { name: string, title: string }, index: number) =>
        <ModeLink key={index} currentMode={mode} mode={item.name}>{item.title}</ModeLink>);

    return (
        <div className={styles.search}>
            <div className={styles.modeLinkWrapper}>{modeLinks}</div>
            <SearchInput/>
            <SearchList/>
        </div>
    )
};

export default Search;