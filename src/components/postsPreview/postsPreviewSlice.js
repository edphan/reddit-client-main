import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../../features/search/searchSlice';

// async operation to fetch post data from reddit API

export const loadAllPostsPreview = createAsyncThunk('postsPreview/loadAllPostsPreview', async ({ subreddit, link }) => {
	const response = await fetch(`https://www.reddit.com/r/${subreddit}/${link}.json`); //fetching new posts from r/funny, r/programmerhumor, and r/softwaregore
	const json = await response.json();

	return json;
});

// slice for posts preview, store those posts previews in post state

export const postsPreviewSlice = createSlice({
	name: 'postsPreview',
	initialState: {
		post: [],
		isLoadingPostsPreview: false,
		failedToLoadPostsPreview: false,
	},
	extraReducers: {
		[loadAllPostsPreview.pending]: (state, action) => {
			state.isLoadingPostsPreview = true;
			state.failedToLoadPostsPreview = false;
		},

		[loadAllPostsPreview.fulfilled]: (state, action) => {
			state.isLoadingPostsPreview = false;
			state.failedToLoadPostsPreview = false;
			state.post = action.payload.data.children;
		},

		[loadAllPostsPreview.rejected]: (state, action) => {
			state.isLoadingPostsPreview = false;
			state.failedToLoadPostsPreview = true;
		},
	},
});

// select isLoadingPosts state
export const isLoadingPosts = (state) => state.postsPreview.isLoadingPost;

// select postsPreview state
export const selectPostPreview = (state) => state.postsPreview.post;

// select filtered postPreview state
export const selectFilteredPostPreview = (state) => {
	const allPostPreview = selectPostPreview(state);
	const searchTerm = selectSearchTerm(state);
	if (searchTerm !== '') {
		return allPostPreview.filter((post) => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()));
	} else {
		return allPostPreview;
	}
};

export default postsPreviewSlice.reducer;
