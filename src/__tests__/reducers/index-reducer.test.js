import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import postListReducer from '../../reducers/post-list-reducer';
import postSelectReducer from '../../reducers/post-select-reducer';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

let store = createStore(rootReducer);

describe('rootReducer', () => {
    test('should return default state if the action is null', () => {
    expect(rootReducer({}, {type: null})).toEqual({
        mainPostList: {},
        selectedPost: null
    });
    });

    test('Check that postListReducer initial state matches rootReducer', () => {
        expect(store.getState().mainPostList).toEqual(postListReducer(undefined, {type: null}));
    });

    test('Check that postSelectReducer initial state matches rootReducer', () => {
       expect(store.getState().selectedPost).toEqual(postSelectReducer(undefined, {type: null}));
    });

    test('Check that "CREATE_POST" action works properly in rootReducer and postListReducer', () => {
        const action = {
            type: 'ADD_POST',
            text: 'Dont remove the test we have already written!',
        imgUrl: 'https://masterzoo.ua/content/images/14/700x700l80mc0/63218168137968.webp',
        autor: 'Vova',
        like: 1,
        dislike: 1,
        id: 1
         };
         store.dispatch(action);
         expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
    });

    test('Check that "SELECT_POST" action works properly in rootReducer and postSelectReducer', () => {
       const action = {
           type: 'SELECT_POST',
           id: 2
        };
        store.dispatch(action);
        expect(store.getState().selectedPost).toEqual(postSelectReducer(undefined, action));
    });
});