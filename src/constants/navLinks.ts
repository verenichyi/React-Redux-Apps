interface INavLink {
	title: string,
	path: string
}

const navLinks: Array<INavLink> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Timer',
		path: '/timer'
	},
	{
		title: 'Progress bar',
		path: '/progress-bar'
	},
	{
		title: 'Search',
		path: '/search'
	},
	{
		title: 'Todo List',
		path: '/todo-list'
	},
];

export default navLinks;