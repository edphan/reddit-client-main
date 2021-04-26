import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedSubReddit() {
	// render the 3 buttons to 3 different subreddits: ProgrammerHumor, SoftwareGore, Funny
	return (
		<div className='featured-sub-reddit'>
			<ul>
				<h3>Featured Sub Reddit</h3>
				<div className='featured-sub-reddit-button-container'>
					<Link to='/r/programmerhumor'>
						<button className='programmerhumor-button'>r/programmerhumor</button>
					</Link>

					<Link to='/r/softwaregore'>
						<button className='softwaregore-button'>r/softwaregore</button>
					</Link>

					<Link to='/r/funny'>
						<button className='funny-button'>r/funny</button>
					</Link>
				</div>
			</ul>
		</div>
	);
}
