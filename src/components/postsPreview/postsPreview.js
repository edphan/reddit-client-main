import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from './postListItems';
import { selectPostPreview, loadAllPostsPreview, selectFilteredPostPreview } from './postsPreviewSlice';
import { selectSearchTerm } from '../../features/search/searchSlice';

function PostsPreview() {
	const dispatch = useDispatch();
	const postsPreview = useSelector(selectPostPreview);
	const filteredPost = useSelector(selectFilteredPostPreview);
	const searchTerm = useSelector(selectSearchTerm);

	const subreddit = 'funny+programmerhumor+softwaregore';
	const link = 'best';

	useEffect(() => {
		dispatch(loadAllPostsPreview({ subreddit, link }));
	}, [dispatch]);

	// renders the <PostListItem /> component by mapping over postPreview
	if (searchTerm === '') {
		//when there is no searchTerm
		return (
			<div className='post-preview-container'>
				{postsPreview.map((post) => (
					<div key={post.data.id}>
						<PostListItem post={post} />
					</div>
				))}
			</div>
		);
	} else {
		//when there is a searchTerm
		return (
			<div className='post-preview-container'>
				{filteredPost.map((post) => (
					<div key={post.data.id}>
						<PostListItem post={post} />
					</div>
				))}
			</div>
		);
	}
}

export default PostsPreview;
