const reducer = (state = {}, action) => {
    const {id} = action;
    switch (action.type) {
        case 'SELECT_POST':
            const newState = {...state};
            let selectedPost = newState[id];
            return selectedPost;

        default:
            return state;
    }
    
}

export default reducer;