import CryptoJS from 'crypto-js';

export const encryptData = (data: string): string => {
	return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
};