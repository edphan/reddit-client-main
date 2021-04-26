import React from 'react';
import commentImg from '../../logo/comment.png';
import arrowImg from '../../logo/up-arrow.png';
import { Link } from 'react-router-dom';

function PostListItem({ post }) {
	const { id, title, ups, author, subreddit, url, created_utc } = post.data;

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

	// renders out each individual post review
	// link the comment button and the post+title to load comments

	return (
		<div className='post-preview-individual'>
			<div className='top-post-preview'>
				<p>r/{subreddit}</p>
				<p>{author}</p>
				<p>{timePassed}</p>
			</div>

			<div className='middle-post-preview'>
				<Link to={`/r/${subreddit}/comments/${id}/`}>
					<button>
						<h3>{title}</h3>
						<img src={url} alt='' />
					</button>
				</Link>
			</div>

			<div className='bottom-post-preview'>
				<button className='arrow-button'>
					<img src={arrowImg} alt='arrow' className='arrow-button' />
					{upvote >= 1000 ? upvote / 1000 + 'k' : upvote}
				</button>

				<Link to={`/r/${subreddit}/comments/${id}/`}>
					<button className='comment-button'>
						<img src={commentImg} alt='comment' className='comment-button' />
						COMMENTS
					</button>
				</Link>
			</div>
		</div>
	);
}

export default PostListItem;
