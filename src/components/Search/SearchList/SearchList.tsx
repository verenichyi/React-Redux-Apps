import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';

import {posts} from '../../../constants/searchInput';

const SearchList = () => {
	const searchValue = useSelector((state: RootStateOrAny) => state.searchReducer.searchValue);

	const searchItems = posts.filter((post) => post.text.toLowerCase().includes(searchValue.toLowerCase())).map((post) => (
		<li key={post.id}>{post.text}</li>));

	return (
		<ul>{searchItems}</ul>
	)
};

export default SearchList;