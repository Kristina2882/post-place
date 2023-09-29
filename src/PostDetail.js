import React from "react";
import PropTypes from 'prop-types';

function PostDetail(props) {
    const {post} = props;
    return (
        <React.Fragment>
            <h3>Post details</h3>
            <h3>{post.text}</h3>
            <h5><em>by {post.autor}</em></h5>
            <img src={post.imgUrl}/>
            <h5>Posted on: {post.postDate.toString()}</h5>
            <h5>Likes: {post.like}  No! {post.dislike}</h5>
        </React.Fragment>
    );
}

PostDetail.propTypes = {
    post: PropTypes.object
}

export default PostDetail;