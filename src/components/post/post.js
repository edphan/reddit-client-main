import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../comments/comments';
import PostItem from './postItem';
import { isPostLoaded, loadPost } from './postSlice';

export default function Post({ match }) {
	const dispatch = useDispatch();

	// use object destructuring to put the passed in id and subreddit into their respective variables from match.params
	// match.params carries the props called id and subreddit, passed in via the <Link> in PostListItems
	const { id, subreddit } = match.params;

	// check whether the post is loaded or not
	const isLoaded = useSelector(isPostLoaded);

	// call useEffect to dispatch loadPost async thunk when the component <Post /> first render
	useEffect(() => {
		dispatch(loadPost({ subreddit: subreddit, postId: id }));
	}, [dispatch, id, subreddit]);

	return (
		<div className='post-comments-container'>
			{isLoaded && ( // only render post + comment components when isLoaded === true
				<div>
					<PostItem />
					<div className='comments'>
						<h3>DISCUSSIONS</h3>
						<Comments />
					</div>
				</div>
			)}
		</div>
	);
}
