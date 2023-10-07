import React from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function Post(props) {
    const myStyle = {
        heigth: '300px',
        width: '400px'
    }
    return (
     <React.Fragment>
        <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.text}</h3>
        <img src={props.imgUrl} style={myStyle}/>
        <h5><em>By: {props.autor} | Date: {props.postDate.toDateString()} | 🧡 : {props.like} 🤢 : {props.dislike}</em></h5> 
        </div>
        <Button onClick={() => props.whenLikeClicked(props.id)}>Like!</Button> <Button onClick={() => props.whenDislikeClicked(props.id)}>No!</Button>
     </React.Fragment>
    );
}

Post.propTypes = {
    text: PropTypes.string,
    imgUrl: PropTypes.string,
    autor: PropTypes.string,
    postDate: PropTypes.object,
    like: PropTypes.number,
    dislike: PropTypes.number,
    whenPostClicked: PropTypes.func, 
    whenLikeClicked:PropTypes.func,
    whenDislikeClicked: PropTypes.func
}

export default Post;