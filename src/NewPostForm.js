import React from "react";
import PropTypes from 'prop-types';
import {v4} from "uuid";

function NewPostForm(props) {

    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        props.onAddingNewPost({
            text: event.target.text.value,
            imgUrl: event.target.imgUrl.value,
            autor:event.target.autor.value,
            postDate: new Date(),
            like: 0,
            dislike: 0,
            id: v4()

        });
    }

    return (
        <React.Fragment>
            <form onSubmit={handleNewPostFormSubmission}>
                <input 
                type="text"
                name="text"
                placeholder="What do you think?"/>
                <input 
                type="text"
                name="imgUrl"
                placeholder="Put image URL here"/>
                <input 
                type="text"
                name="autor"
                placeholder="What'your name?"/>
                <button type="submit">Post!</button>
            </form>
        </React.Fragment>
    );
}

NewPostForm.propTypes = {
    onAddingNewPost: PropTypes.func
}

export default NewPostForm;