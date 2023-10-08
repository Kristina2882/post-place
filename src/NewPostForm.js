import React from "react";
import PropTypes from 'prop-types';
import {v4} from "uuid";
import { Button , Form} from "react-bootstrap";

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
            <Form onSubmit={handleNewPostFormSubmission}>
                <br/>
                <Form.Control
                type="text"
                name="text"
                placeholder="What do you think?"/>
                <br/>
                <Form.Control 
                type="text"
                name="imgUrl"
                placeholder="Put image URL here"/>
                <br/>
                <Form.Control 
                type="text"
                name="autor"
                placeholder="What'your name?"/>
                <br/>
                <Button type="submit" variant="outline-dark"><strong>Post!</strong></Button>
            </Form>
        </React.Fragment>
    );
}

NewPostForm.propTypes = {
    onAddingNewPost: PropTypes.func
}

export default NewPostForm;