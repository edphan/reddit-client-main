import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../postsPreview/postListItems';
import { loadAllPostsPreview, selectPostPreview } from '../postsPreview/postsPreviewSlice';

function Softwaregore() {
	const dispatch = useDispatch();
	const softwaregore = useSelector(selectPostPreview);

	const subreddit = 'softwaregore';
	const link = 'best';

	useEffect(() => {
		dispatch(loadAllPostsPreview({ subreddit, link }));
	}, [dispatch]);

	return (
		<div className='post-preview-container'>
			{softwaregore.map((post) => (
				<div key={post.data.id}>
					<PostListItem post={post} />
				</div>
			))}
		</div>
	);
}

export default Softwaregore;
