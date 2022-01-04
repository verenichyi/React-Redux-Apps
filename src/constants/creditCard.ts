interface IImages {
	[key: string]: string,
}

export const imageUrls: IImages = {
	visa: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
	mastercard: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png',
	discover: 'https://www.discover.com/company/images/newsroom/media-downloads/discover.png',
	amex: 'https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg',
	diners: 'https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png',
	jcb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png'
}

export const expYears: Array<string> = ['2022', '2023', '2024', '2025', '2026', '2027', '2028'];

export const expMonths: Array<string> = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];