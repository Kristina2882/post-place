const reducer = (state = null, action) => {
    const {id} = action;
    switch (action.type) {
        case 'SELECT_POST':
            const newState = {...state};
            let selectedPost = newState[id];
            if (selectedPost)
            {
            return selectedPost;
            }
            else {
                return null;
            }

        default:
            return state;
    }
    
}

export default reducer;