import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';

import styles from './circular-progress-bar.module.scss';

import {sqSize, strokeWidth, radius, viewBox, dashArray} from '../../constants/circularProgressBar';

const CircularProgressBar = () => {
	const percentage: number = useSelector((state: RootStateOrAny) => state.timerReducer.percentage);
	const dashOffset: number = dashArray - dashArray * percentage / 100;

	return (
		<svg
			width={sqSize}
			height={sqSize}
			viewBox={viewBox}>
			<circle
				className={styles.circleBackground}
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}/>
			<circle
				className={styles.circleProgress}
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
				style={{
					strokeDasharray: dashArray,
					strokeDashoffset: dashOffset
				}}/>
			<text
				className={styles.circleText}
				x="50%"
				y="50%"
				dy=".3em"
				textAnchor="middle">
				{`${parseFloat(percentage.toFixed(1))}%`}
			</text>
		</svg>
	)
}

export default CircularProgressBar;