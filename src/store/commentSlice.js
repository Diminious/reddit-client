import { createSlice } from "@reduxjs/toolkit";
import { getPostComments } from "../api/reddit";

const initialState = {
    comments: [],
    commentsError: false,
    commentsLoading: false
}

const commentSlice = createSlice({
    name: "postComments",
    initialState,
    reducers: {
        setComments(state, action) {
            state.comments = action.payload
        },
        startGetComments(state) {
            state.commentsLoading = true;
            state.commentsError = false;
        },
        getCommentsSuccess(state, action) {
            state.commentsLoading = false;
            state.comments = action.payload;
        },
        getCommentsFailed(state) {
            state.commentsLoading = false;
            state.commentsError = true;
        }
    }
});

export const {
    setComments,
    startGetComments,
    getCommentsSuccess,
    getCommentsFailed
} = commentSlice.actions;

export default commentSlice.reducer;

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({ index, comments }));
    } catch (error) {
        dispatch(getCommentsFailed(index));
    }
};