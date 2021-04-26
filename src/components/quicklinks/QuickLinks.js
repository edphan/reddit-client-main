import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import activeBestImg from '../../logo/startup.png';
import activeHotImg from '../../logo/flame.png';
import activeNewImg from '../../logo/new.png';
import inactiveBestImg from '../../logo/startup_inactive.png';
import inactiveHotImg from '../../logo/flame inactive.png';
import inactiveNewImg from '../../logo/new_inactive.png';

export default function QuickLinks() {
	const [bestImgState, SetBestImgState] = useState(activeBestImg);
	const [hotImgState, SetHotImgState] = useState(inactiveHotImg);
	const [newImgState, SetNewImgState] = useState(inactiveNewImg);

	// handles when Best button is clicked
	const handleBestButtonClick = () => {
		SetBestImgState(activeBestImg);
		SetHotImgState(inactiveHotImg);
		SetNewImgState(inactiveNewImg);
	};

	// handles when Hot button is clicked
	const handleHotButtonClick = () => {
		SetBestImgState(inactiveBestImg);
		SetHotImgState(activeHotImg);
		SetNewImgState(inactiveNewImg);
	};

	// handles when New button is click
	const handleNewButtonClick = () => {
		SetBestImgState(inactiveBestImg);
		SetHotImgState(inactiveHotImg);
		SetNewImgState(activeNewImg);
	};

	// render out the 3 Best, Hot, New buttons
	return (
		<div className='quick-links-container'>
			<Link to='/'>
				<button className='best-button' onClick={() => handleBestButtonClick()}>
					<img src={bestImgState} alt='best' />
					BEST
				</button>
			</Link>

			<Link to='/hot'>
				<button className='hot-button' onClick={() => handleHotButtonClick()}>
					<img src={hotImgState} alt='hot' />
					HOT
				</button>
			</Link>

			<Link to='/new'>
				<button className='new-button' onClick={() => handleNewButtonClick()}>
					<img src={newImgState} alt='new' />
					NEW
				</button>
			</Link>
		</div>
	);
}
