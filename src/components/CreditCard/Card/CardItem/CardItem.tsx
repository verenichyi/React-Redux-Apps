import React from 'react';

import styles from './CardItem.module.scss';

interface Props {
	title: string,
	value: string,
}

const CardItem = ({title, value}: Props) => {
	return (
		<div>
			<h5 className={styles.title}>{title}</h5>
			<p className={styles.value}>{value ? value : ''}</p>
		</div>
	);
};

export default CardItem;