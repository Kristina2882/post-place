import postSelectReducer from '../../reducers/post-select-reducer';

describe('postSelectReducer', () => {

    let action;
    let postData = {
        1: {
        text: 'Dont remove the test we have already written!',
        imgUrl: 'https://masterzoo.ua/content/images/14/700x700l80mc0/63218168137968.webp',
        autor: 'Vova',
        like: 1,
        dislike: 1,
        id: 1
    },
    2: {
        text: 'Dont remove the test we have already written!second issue check',
        imgUrl: 'https://masterzoo.ua/content/images/14/700x700l80mc0/63218168137968.webp',
        autor: 'Viktor',
        like: 11,
        dislike: 1,
        id: 2
    }

}
    test('should return the default state if the action is null', () => {
        expect(postSelectReducer(null, {type: null})).toEqual(null);
    });
    test('should return the post selected by id', () => {
        action = {
            type: 'SELECT_POST',
            id: 2
        }
        expect(postSelectReducer(postData, action)).toEqual({
                text: 'Dont remove the test we have already written!second issue check',
                imgUrl: 'https://masterzoo.ua/content/images/14/700x700l80mc0/63218168137968.webp',
                autor: 'Viktor',
                like: 11,
                dislike: 1,
                id: 2
        });
    });
});