import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../postsPreview/postListItems';
import { loadAllPostsPreview, selectPostPreview } from '../postsPreview/postsPreviewSlice';

function Programmerhumor() {
	const dispatch = useDispatch();
	const programmerhumor = useSelector(selectPostPreview);

	const subreddit = 'programmerhumor';
	const link = 'best';

	useEffect(() => {
		dispatch(loadAllPostsPreview({ subreddit, link }));
	}, [dispatch]);

	return (
		<div className='post-preview-container'>
			{programmerhumor.map((post) => (
				<div key={post.data.id}>
					<PostListItem post={post} />
				</div>
			))}
		</div>
	);
}

export default Programmerhumor;
