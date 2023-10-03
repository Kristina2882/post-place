import rootReducer from '../../reducers/index';

describe('rootReducer', () => {
    test('should return default state if the action is null', () => {
    expect(rootReducer({}, {type: null})).toEqual({
        mainPostList: {},
        selectedPost: null
    });
    });
});