import React, { FormEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import styles from './CreditCard.module.scss';

import Card from 'src/components/CreditCard/Card/Card';
import { encryptData } from 'src/helpers/card';
import useActions from 'src/hooks/useActions';
import { cardActions } from 'src/redux/actionCreators';
import { errorTexts, formValuePatterns } from 'src/constants/creditCard';

const CreditCard = () => {
  const {
    setIsAllFieldsFilled,
    setErrorText,
    setIsCardNumValid,
    setIsCardHolderValid,
  } = useActions(cardActions);

  const {
    cvv,
    cardType,
    creditCardNum,
    cardHolder,
    errorText,
    isAllFieldsFilled,
    isCardNumValid,
    isCardHolderValid,
  } = useSelector((state: RootStateOrAny) => state.cardReducer);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!creditCardNum || !cardHolder || !cvv) {
      setIsAllFieldsFilled(false);
      setErrorText(errorTexts.allFields);
      return;
    } else {
      setIsAllFieldsFilled(true);
    }

    if (
      cardType === 'unknown' ||
      !formValuePatterns.cardNumber.test(creditCardNum.replace(/\s+/g, '').trim())
    ) {
      setIsCardNumValid(false);
      setErrorText(errorTexts.cardNumber);
      return;
    } else {
      setIsCardNumValid(true);
    }

    if (!formValuePatterns.cardholder.test(cardHolder)) {
      setIsCardHolderValid(false);
      setErrorText(errorTexts.cardHolder);
      return;
    } else {
      setIsCardHolderValid(true);
    }

    const hashCVV = encryptData(cvv);
    console.log(hashCVV);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Card />
        {(!isAllFieldsFilled || !isCardNumValid || !isCardHolderValid) && (
          <div className={styles.error}>{errorText}</div>
        )}
        <button className={styles.button}>{`Submit payment`}</button>
      </form>
    </>
  );
};

export default CreditCard;
