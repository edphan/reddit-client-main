import React from 'react';
import Search from '../../features/search/Search';
import logo from '../../logo/Reddit_Lockup_OnWhite.png';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<div className='header'>
				<Link to='/'>
					<img src={logo} alt='reddit logo' />
				</Link>
				<div className='search-bar'>
					<Search />
				</div>
			</div>
		</div>
	);
}
