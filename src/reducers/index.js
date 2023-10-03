import postListReducer from './post-list-reducer';
import postSelectReducer from './post-select-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    mainPostList: postListReducer,
    selectedPost: postSelectReducer
});

export default rootReducer;