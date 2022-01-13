import React, { ChangeEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Cleave from 'cleave.js/react';

import styles from './Card.module.scss';

import sticker from 'src/assets/card/chip.png';
import Dropdown from 'src/components/Dropdown/Dropdown';
import { cardActions } from 'src/redux/actionCreators';
import {
  expMonths,
  expYears,
  formItems,
  imageUrls,
} from 'src/constants/creditCard';
import useActions from 'src/hooks/useActions';

const Card = () => {
  const {
    cardTypeImage,
    cardHolder,
    creditCardNum,
    expireMonth,
    expireYear,
    cvv,
  } = useSelector((state: RootStateOrAny) => state.cardReducer);

  const {
    setCardType,
    setCardTypeImage,
    setCVV,
    setCardHolder,
    setCreditCardNum,
    setExpireMonth,
    setExpireYear,
  } = useActions(cardActions);

  const handleType = (type: string): void => {
    setCardType(type);

    const cardType = Object.keys(imageUrls).find((item) => item === type);

    if (cardType) {
      setCardTypeImage(imageUrls[type]);
    }
  };

  const handleFormItem = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value;

    switch (event.target.name) {
      case 'cvv':
        setCVV(value);
        break;
      case 'cardholder':
        setCardHolder(value);
        break;
      case 'number':
        setCreditCardNum(value);
        break;
    }
  };

  const handleDropdown = (name: string, value: number): void => {
    switch (name) {
      case 'month':
        setExpireMonth(value);
        break;
      case 'year':
        setExpireYear(value);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.sticker} src={sticker} alt="Sticker" />
        <img className={styles.logo} src={cardTypeImage} alt="Card logo" />
      </div>
      <Cleave
        className={styles.input}
        options={{
          creditCard: true,
          onCreditCardTypeChanged: handleType,
          delimiter: ' ',
        }}
        name={formItems.cardNumber.name}
        value={creditCardNum}
        onChange={handleFormItem}
        placeholder={formItems.cardNumber.placeholder}
      />
      <input
        value={cardHolder}
        onChange={handleFormItem}
        className={styles.input}
        name={formItems.cardHolder.name}
        type="text"
        placeholder={formItems.cardHolder.placeholder}
        required
      />
      <div className={styles.details}>
        <div className={styles.expiration}>
          <Dropdown
            name={'month'}
            selected={expireMonth}
            setSelected={handleDropdown}
            options={expMonths}
          />
          <span className={styles.divider}>/</span>
          <Dropdown
            name={'year'}
            selected={expireYear}
            setSelected={handleDropdown}
            options={expYears}
          />
        </div>
        <input
          value={cvv}
          onChange={handleFormItem}
          maxLength={3}
          type="password"
          name={formItems.cvv.name}
          placeholder={formItems.cvv.placeholder}
          className={`${styles.input} ${styles.cvv}`}
          required
        />
      </div>
    </div>
  );
};

export default Card;
