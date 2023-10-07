import React from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

function PostList(props) {
    return (
    <React.Fragment>
     {Object.values(props.postList).map((post) => 
     <Post
     whenPostClicked={props.onPostSelection}
     whenLikeClicked={props.onLikeClick}
     whenDislikeClicked = {props.onDislikeClick}
     text={post.text}
     imgUrl={post.imgUrl}
     autor={post.autor}
     postDate={post.postDate}
     like={post.like}
     dislike={post.dislike}
     key={post.id}
     id={post.id}
     />
    
     )}
    </React.Fragment>
    );
}

PostList.propTypes = {
    postList: PropTypes.array,
    onPostSelection: PropTypes.func,
    onLikeClick: PropTypes.func,
    onDislikeClick: PropTypes.func
}

export default PostList;