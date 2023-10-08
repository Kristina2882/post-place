import React from "react";
import PropTypes from 'prop-types';

function PostDetail(props) {

    const myStyle = {
        heigth: '400px',
        width: '500px'
    }  
    const {post} = props;
    return (
        <React.Fragment>
            <br/>
            <h3>{post.text}</h3>
            <h5><em>by {post.autor} </em></h5>
            <img src={post.imgUrl} style={myStyle}/>
            <br/>
            <h5>Posted on: {post.postDate.toString()}</h5>  
           <h5>🧡: {post.like}  👎: {post.dislike}</h5>
        </React.Fragment>
    );
}

PostDetail.propTypes = {
    post: PropTypes.object
}

export default PostDetail;