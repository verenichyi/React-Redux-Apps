import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './FilterOption.module.scss';
import { setVisibilityFilter } from 'src/redux/actionCreators';

type Props = {
  currentFilter: string;
  filter: string;
  children: string;
};

const FilterOption = ({ currentFilter, filter, children }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setVisibilityFilter(filter));
  };

  return currentFilter === filter ? (
    <span className={`${styles.option} ${styles.active}`}>{children}</span>
  ) : (
    <span className={styles.option} onClick={handleClick}>
      {children}
    </span>
  );
};

export default FilterOption;
