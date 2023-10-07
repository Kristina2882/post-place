const reducer = (state = {}, action) => {
    const {text, imgUrl, autor,like, dislike, postDate, id} = action;
    
    switch (action.type) {
    case 'ADD_POST':
        return Object.assign({}, state, {
            [id] :{
            text: text,
            imgUrl: imgUrl,
            autor: autor, 
            like: like,
            dislike: dislike,
            postDate: postDate,
            id:id
            }
        });

        default:    
        return state;
    }
};

export default reducer;