import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// async operation to fetch post data and comments for individual post from reddit API

export const loadPost = createAsyncThunk('post/loadPost', async ({ subreddit, postId }) => {
	const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}/.json`);
	const json = await response.json();
	return json;
});

// create the slice of the post, has post and comments as state, due to the result from the API fetch

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		post: [],
		comment: [],
		isLoadingPost: false,
		failedToLoadPost: false,
		isPostLoaded: false,
	},
	extraReducers: {
		[loadPost.pending]: (state, action) => {
			state.isLoadingPost = true;
			state.failedToLoadPost = false;
			state.isPostLoaded = false;
		},

		[loadPost.fulfilled]: (state, action) => {
			state.isLoadingPost = false;
			state.failedToLoadPost = false;
			state.isPostLoaded = true;
			state.post = action.payload[0];
			state.comment = action.payload[1];
		},

		[loadPost.rejected]: (state, action) => {
			state.isLoadingPost = false;
			state.failedToLoadPost = true;
			state.isPostLoaded = false;
		},
	},
});

//select post
export const selectPost = (state) => state.post.post.data.children;

//select comments
export const selectComments = (state) => state.post.comment.data.children;

//select isLoadingPost
export const isLoadingPost = (state) => state.post.isLoadingPost;

// select isPostLoaded
export const isPostLoaded = (state) => state.post.isPostLoaded;

export default postSlice.reducer;
