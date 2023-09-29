const reducer = (state = {}, action) => {
    const {text, imgUrl, autor, id} = action;
    switch (action.type) {
    case 'ADD_POST':
        return Object.assign({}, state, {
            [id] :{
            text: text,
            imgUrl: imgUrl,
            autor: autor, 
            id:id
            }
        });

        default:    
        return state;
    }
};

export default reducer;