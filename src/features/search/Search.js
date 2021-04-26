import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearch } from './searchSlice';

function Search() {
	const dispatch = useDispatch();
	const searchTerm = useSelector(selectSearchTerm);

	const handleChange = (event) => {
		dispatch(setSearch(event.target.value));
	};

	return (
		<div>
			<form>
				<input type='text' placeholder='Search by typing' onChange={handleChange} value={searchTerm} />
			</form>
		</div>
	);
}

export default Search;
