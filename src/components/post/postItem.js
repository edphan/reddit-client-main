import React from 'react';
import { useSelector } from 'react-redux';
import { selectPost } from './postSlice';

function PostItem() {
	// select post
	const post = useSelector(selectPost);
	const { author, idPost, title, subreddit_name_prefixed, url } = post[0].data;

	// render out each variable that made up of the post
	return (
		<div className='post' key={idPost}>
			<div className='top-of-post'>
				<p>{author}</p>
				<p>{subreddit_name_prefixed}</p>
			</div>
			<h3>{title}</h3>
			<img src={url} alt='' />
		</div>
	);
}

export default PostItem;
