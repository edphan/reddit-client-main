import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../postsPreview/postListItems';
import { selectPostPreview, loadAllPostsPreview } from '../postsPreview/postsPreviewSlice';

function Funny() {
	const dispatch = useDispatch();
	const funnyPostPreview = useSelector(selectPostPreview);

	const subreddit = 'funny';
	const link = 'best';

	useEffect(() => {
		dispatch(loadAllPostsPreview({ subreddit, link }));
	}, [dispatch]);

	return (
		<div className='post-preview-container'>
			{funnyPostPreview.map((post) => (
				<div key={post.data.id}>
					<PostListItem post={post} />
				</div>
			))}
		</div>
	);
}

export default Funny;
