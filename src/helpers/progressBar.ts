export const getRadius = (sqSize: number, strokeWidth: number): number =>
  (sqSize - strokeWidth) / 2;
export const getViewBox = (sqSize: number): string => `0 0 ${sqSize} ${sqSize}`;
export const getDashArray = (radius: number): number => radius * Math.PI * 2;
