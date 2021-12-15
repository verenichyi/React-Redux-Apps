import React from 'react';

const posts = [
	{id: '1', text: 'This first post is about React'},
	{id: '2', text: 'This next post is about Preact'},
	{id: '3', text: 'We have yet another React post!'},
	{id: '4', text: 'This is the fourth and final post'},
];

const SearchList = ({searchValue}) => {
	const searchItems = posts.filter((post) => post.text.toLowerCase().includes(searchValue.toLowerCase())).map((post) => (
		<li key={post.id}>{post.text}</li>))

	return (
		<ul>{searchItems}</ul>
	)
};

export default SearchList;