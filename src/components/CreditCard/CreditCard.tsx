import React, { FormEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import styles from './CreditCard.module.scss';

import Card from 'src/components/CreditCard/Card/Card';
import { encryptData } from 'src/helpers/card';

const CreditCard = () => {
  const { cvv, cardType } = useSelector(
    (state: RootStateOrAny) => state.cardReducer
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const hashCVV = encryptData(cvv);
    console.log(hashCVV);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Card />
        <button
          className={styles.button}
        >{`Submit ${cardType} payment`}</button>
      </form>
    </>
  );
};

export default CreditCard;
