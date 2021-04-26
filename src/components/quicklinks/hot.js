import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../postsPreview/postListItems';
import { loadAllPostsPreview, selectPostPreview } from '../postsPreview/postsPreviewSlice';

// renders out the post previews with hot endpoint
function Hot() {
	const dispatch = useDispatch();
	const hot = useSelector(selectPostPreview);

	const subreddit = 'funny+programmerhumor+softwaregore';
	const link = 'hot';

	useEffect(() => {
		dispatch(loadAllPostsPreview({ subreddit, link }));
	}, [dispatch]);

	return (
		<div className='post-preview-container'>
			{hot.map((post) => (
				<div key={post.data.id}>
					<PostListItem post={post} />
				</div>
			))}
		</div>
	);
}

export default Hot;
