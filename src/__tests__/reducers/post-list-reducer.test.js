import postListReducer from '../../reducers/post-list-reducer';


describe('postListReducer', () =>  {
    let action;
    let postData = {
        text: 'Dont remove the test we have already written!',
        imgUrl: 'https://masterzoo.ua/content/images/14/700x700l80mc0/63218168137968.webp',
        autor: 'Vova',
        like: 1,
        dislike: 1,
        id: 1
    }
    test('should return default state is the action is null', () => {
    expect(postListReducer({}, {type: null})).toEqual({})
    });

    test('should add new post to the post list', () => {
     const {text, imgUrl, autor, like, dislike, postDate, id } = postData;
     action = {
        type: 'ADD_POST',
        text: text,
        imgUrl: imgUrl,
        autor: autor,
        like: like,
        dislike: dislike,
        id: id
     };
     expect(postListReducer({}, action)).toEqual({
        [id] : {
        text: text,
        imgUrl: imgUrl, 
        autor: autor,
        like: like,
        dislike: dislike,
        postDate: postDate,
        id: id
        }
     });

    });

});