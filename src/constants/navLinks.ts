interface INavLink {
	title: string,
	path: string
}

interface ILinks {
	home: INavLink,
	timer: INavLink,
	progressBar: INavLink,
	search: INavLink,
	todo: INavLink,
	card: INavLink,
}

const navLinks: ILinks = {
	home: {
		title: 'Home',
		path: '/'
	},
	timer: {
		title: 'Timer',
		path: '/timer'
	},
	progressBar: {
		title: 'Progress bar',
		path: '/progress-bar'
	},
	search: {
		title: 'Search',
		path: '/search'
	},
	todo: {
		title: 'Todo',
		path: '/todo-list'
	},
	card: {
		title: 'Credit card',
		path: '/credit-card'
	},
};

export default navLinks;