import { createSlice } from "@reduxjs/toolkit";
import { getSubredditName, getSubreddits } from '../api/reddit';

const initialState = {
    subreddits: [],
    userSubreddits: [],
    error: false,
    isLoading: false,
    addingError: false,
    addingLoading: false
}

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        startAddSubreddit(state) {
            state.addingError = false;
            state.addingLoading = true;
        },
        addSubredditSuccess(state, action) {
            state.addingLoading = false;
            state.userSubreddits = [action.payload, ...state.userSubreddits]
        },
        addSubredditFailed(state, action) {
            state.addingError = true;
            state.addingLoading = false;
            state.userSubreddits = [action.payload, ...state.userSubreddits]
        },
        removeUserSubreddit(state, action) {
            return {
                ...state,
                userSubreddits: state.userSubreddits.filter((subreddit) => action.payload !== subreddit.display_name)
            }
        }
    },
});

export const {
    getSubredditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
    startAddSubreddit,
    addSubredditFailed,
    addSubredditSuccess,
    removeUserSubreddit
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

// This is a Redux Thunk that gets subreddits.
export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
        dispatch(getSubredditsFailed());
    }
};

export const fetchNewSubreddit = (subName) => async (dispatch) => {
    try {
        dispatch(startAddSubreddit());
        const subreddit = await getSubredditName(subName);
        console.log(subreddit);

        dispatch(addSubredditSuccess({
            display_name: subreddit,
            url: `/r/${subreddit}/`,
            exists: true
        }))
        
    } catch (error) {
        console.error(error);
        
        dispatch(addSubredditFailed({
            display_name: subName,
            url: `/r/${subName}/`,
            exists: false
        }))
    }
}

export const removeUserAddedSubreddit = (subName) => (dispatch) => {
    dispatch(removeUserSubreddit(subName))
}
  
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectUserSubreddits = (state) => state.subreddits.userSubreddits;