import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import styles from './circular-progress-bar.module.scss';

import useWindowSize from 'src/hooks/useWindowSize';
import { getDashArray, getRadius, getViewBox } from 'src/helpers/progressBar';

const CircularProgressBar = () => {
  const size = useWindowSize();
  const percentage: number = useSelector(
    (state: RootStateOrAny) => state.timerReducer.percentage
  );
  let sqSize = size.width * 0.2;
  let strokeWidth = size.width * 0.01;
  let radius = getRadius(sqSize, strokeWidth);
  let viewBox = getViewBox(sqSize);
  let dashArray = getDashArray(radius);
  let dashOffset: number = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className={styles.circleBackground}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={styles.circleProgress}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className={styles.circleText}
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${parseFloat(percentage.toFixed(1))}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
