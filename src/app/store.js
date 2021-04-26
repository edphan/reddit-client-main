import { configureStore } from '@reduxjs/toolkit';
import postsPreviewReducer from '../components/postsPreview/postsPreviewSlice';
import postReducer from '../components/post/postSlice';
import searchReducer from '../features/search/searchSlice';

export default configureStore({
	reducer: {
		postsPreview: postsPreviewReducer,
		post: postReducer,
		search: searchReducer,
	},
});
