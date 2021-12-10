import React from 'react';

import styles from './circular-progress-bar.module.scss';
import {useSelector} from 'react-redux';

const CircularProgressBar = ({sqSize, strokeWidth}) => {
	const percentage = useSelector(state=> state.timerReducer.percentage);
	const radius = (sqSize - strokeWidth) / 2;
	const viewBox = `0 0 ${sqSize} ${sqSize}`;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - dashArray * parseFloat(percentage.toFixed(1)) / 100;

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