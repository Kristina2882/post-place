import React from "react";

function NewPostForm() {

    function handleNewPostFormSubmission(event) {
        event.preventDefault();
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

export default NewPostForm;