import React from 'react';

import styles from './Filter.module.scss';
import FilterOption from './FilterOption/FilterOption';
import modes from 'src/constants/filter';

type Props = {
  visibilityFilter: string;
};

const Filter = ({ visibilityFilter }: Props) => {
  return (
    <div className={styles.filter}>
      <FilterOption currentFilter={visibilityFilter} filter={modes.all}>
        All
      </FilterOption>
      <FilterOption currentFilter={visibilityFilter} filter={modes.active}>
        Active
      </FilterOption>
      <FilterOption currentFilter={visibilityFilter} filter={modes.completed}>
        Completed
      </FilterOption>
    </div>
  );
};

export default Filter;
