import React, { ChangeEvent, SyntheticEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Cleave from 'cleave.js/react';

import styles from './Card.module.scss';

import sticker from 'src/assets/card/chip.png';
import Dropdown from 'src/components/Dropdown/Dropdown';
import { cardActions } from 'src/redux/actionCreators';
import {
  errorTexts,
  expMonths,
  expYears,
  formItems,
  formValuePatterns,
  imageUrls,
} from 'src/constants/creditCard';
import useActions from 'src/hooks/useActions';

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
  relatedTarget: EventTarget | null;
  target: EventTarget & T;
}

const Card = () => {
  const {
    cardTypeImage,
    cardHolder,
    creditCardNum,
    expireMonth,
    expireYear,
    cvv,
    isAllFieldsFilled,
    isCardNumValid,
    isCardHolderValid,
    cardType,
  } = useSelector((state: RootStateOrAny) => state.cardReducer);

  const {
    setCardType,
    setCardTypeImage,
    setCVV,
    setCardHolder,
    setCreditCardNum,
    setExpireMonth,
    setExpireYear,
    setIsCardNumValid,
    setErrorText,
    setIsCardHolderValid,
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

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;

    switch (event.target.name) {
      case 'cvv':
        break;
      case 'cardholder':
        if (!formValuePatterns.cardholder.test(value)) {
          setIsCardHolderValid(false);
          setErrorText(errorTexts.cardHolder);
        } else {
          setIsCardHolderValid(true);
        }
        break;
      case 'number':
        if (
          cardType === 'unknown' ||
          !formValuePatterns.cardNumber.test(
            value.replace(/\s+/g, '').trim()
          )
        ) {
          setIsCardNumValid(false);
          setErrorText(errorTexts.cardNumber);
        } else {
          setIsCardNumValid(true);
        }
        break;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.sticker} src={sticker} alt="Sticker" />
        <img className={styles.logo} src={cardTypeImage} alt="Card logo" />
      </div>
      <Cleave
        className={`${styles.input} ${
          (!isAllFieldsFilled && !creditCardNum) || !isCardNumValid
            ? styles.error
            : ''
        }`}
        options={{
          creditCard: true,
          onCreditCardTypeChanged: handleType,
          delimiter: ' ',
        }}
        name={formItems.cardNumber.name}
        value={creditCardNum}
        onChange={handleFormItem}
        onBlur={handleOnBlur}
        placeholder={formItems.cardNumber.placeholder}
      />
      <input
        value={cardHolder}
        onChange={handleFormItem}
        onBlur={handleOnBlur}
        className={`${styles.input} ${
          (!isAllFieldsFilled && !cardHolder) || !isCardHolderValid
            ? styles.error
            : ''
        }`}
        name={formItems.cardHolder.name}
        type="text"
        placeholder={formItems.cardHolder.placeholder}
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
          onBlur={handleOnBlur}
          maxLength={3}
          minLength={3}
          type="password"
          name={formItems.cvv.name}
          placeholder={formItems.cvv.placeholder}
          className={`${styles.input} ${
            !isAllFieldsFilled ? styles.error : ''
          } ${styles.cvv}`}
        />
      </div>
    </div>
  );
};

export default Card;
