const reducer = (state = {}, action) => {
    const {id} = action;
    switch (action.type) {
        case 'SELECT_POST':

            const newState = {...state};
            const selectedPost = newState[id];
            if (selectedPost) {
            return selectedPost;
            }
            else {
                return null;
            }

        default:
            return null;
    }
    
}

export default reducer;