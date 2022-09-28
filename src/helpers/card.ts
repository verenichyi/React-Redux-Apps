import CryptoJS from 'crypto-js';

export const encryptData = (data: string): string => {
	return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
};

export const generateNumbersArray = (from: number, to: number): Array<number> => {
	const arr = [];

	for (let i = from; i <= to; i++) {
		arr.push(i)
	}

	return arr;
}