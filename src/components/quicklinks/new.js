import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../postsPreview/postListItems';
import { loadAllPostsPreview, selectPostPreview } from '../postsPreview/postsPreviewSlice';

// renders out the post previews with new endpoint
function New() {
	const dispatch = useDispatch();
	const newPost = useSelector(selectPostPreview);

	const subreddit = 'funny+programmerhumor+softwaregore';
	const link = 'new';

	useEffect(() => {
		dispatch(loadAllPostsPreview({ subreddit, link }));
	}, [dispatch]);

	return (
		<div className='post-preview-container'>
			{newPost.map((post) => (
				<div key={post.data.id}>
					<PostListItem post={post} />
				</div>
			))}
		</div>
	);
}

export default New;
