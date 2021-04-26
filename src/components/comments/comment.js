import React from 'react';
import arrowImg from '../../logo/up-arrow.png';

function Comment({ comment }) {
	const { ups, id, author, body, created_utc } = comment.data;

	// round the number of up-votes to the nearest 100th, e.g 1340 to 1300
	let upvote;
	if (ups >= 1000) {
		upvote = Math.round(ups / 100) * 100;
	} else {
		upvote = ups;
	}

	// convert the EPOCH/UNIX post time to human-readable time
	let currentTime = Date.now() / 1000;
	let elapsedTimeHour = (currentTime - created_utc) / 60 / 60;
	let timePassed;

	if (elapsedTimeHour < 24) {
		timePassed = Math.floor(elapsedTimeHour) + 'h ago';
	} else {
		timePassed = Math.floor(elapsedTimeHour / 24) + 'd ago';
	}

	return (
		<div className='comment-container' key={id}>
			<div className='top-part-comment'>
				<h4>{author}</h4>
				<p>{timePassed}</p>
			</div>

			<div className='comment-body'>
				<p>{body}</p>
			</div>

			<div className='bottom-part-comment'>
				<img src={arrowImg} alt='arrow' className='arrow-button' />
				<p>Upvotes: {upvote >= 1000 ? upvote / 1000 + 'k' : upvote}</p>
			</div>
		</div>
	);
}

export default Comment;
