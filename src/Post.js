import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
    return (
     <React.Fragment>
        <h3>{props.text}</h3>
        <img src={props.imgUrl} alt="post-pic"/>
        <h5><em>Autor: {props.autor} | Date: {props.postDate} | 🧡 : {props.like} 🤢 : {props.dislike}</em></h5>
        <button>Like!</button> <button>No!</button>
     </React.Fragment>
    );
}

Post.propTypes = {
    text: PropTypes.string,
    imgUrl: PropTypes.string,
    autor: PropTypes.string,
    postDate: PropTypes.string,
    like: PropTypes.number,
    dislike: PropTypes.number
}

export default Post;