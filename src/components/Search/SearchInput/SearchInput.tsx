import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import styles from './search-input.module.scss';

import {setSearchInputValue, setSearchValue} from '../../../redux/actionCreators';
import modes from '../../../constants/searchInput';

const SearchInput = () => {
    const mode: string = useSelector((state: RootStateOrAny) => state.searchReducer.mode);
    const value: string = useSelector((state: RootStateOrAny) => state.searchReducer.searchInputValue);
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (mode === modes.enterPressed.name) dispatch(setSearchValue(value));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;

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