import React from 'react';
import { useSelector } from 'react-redux';
import { selectComments } from '../post/postSlice';
import Comment from './comment';

function Comments() {
	const comments = useSelector(selectComments);
	return (
		<div>
			{comments.map((comment) => (
				<div key={comment.data.id}>
					<Comment comment={comment} />
				</div>
			))}
		</div>
	);
}

export default Comments;
