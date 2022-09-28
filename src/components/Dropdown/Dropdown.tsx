import React, { useState } from 'react';

import styles from './Dropdown.module.scss';

interface Props {
  selected: number;
  setSelected: (name: string, option: number) => void;
  options: number[];
  name?: string;
}

const Dropdown = ({ options, selected, setSelected, name }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOption = (name: string, option: number): void => {
    setSelected(name, option);
    setIsActive(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.btn} onClick={handleDropdown}>
        <span>{selected}</span>
        <span className={`${styles.icon} ${isActive ? styles.active : ''}`} />
      </div>
      {isActive && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              data-name={name}
              className={styles.option}
              key={option}
              onClick={(event) =>
                handleOption(event.currentTarget.dataset.name, option)
              }
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
