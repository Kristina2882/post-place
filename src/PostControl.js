import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

class PostControl extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        formVisible: false,
        selectedPost: null
    };
}

    handleClick = () => {
        if (this.state.selectedPost !== null) {
            this.setState({
            formVisible: false,
            selectedPost: null
            });
        }
        else {
        this.setState(prevState =>  ({
         formVisible: !prevState.formVisible
        }));
    }
    }

    handleAddNewPost = (newPost) => {
        const {dispatch} = this.props;
        const {text, imgUrl, autor, like, dislike, postDate, id} = newPost;
        const action = {
            type: 'ADD_POST',
            text: text,
            imgUrl: imgUrl,
            autor: autor, 
            like: like,
            dislike: dislike,
            postDate: postDate,
            id: id
        }
        dispatch(action);
        this.setState({
           formVisible: false
        });
    }
    
    handleChangeSelectedPost = (id) => {
     const selectedPost = this.props.mainPostList[id];
     this.setState({
     selectedPost: selectedPost
     });
    }

    handleLikeClick = (id) => {
       const {dispatch} = this.props;
       const postToLike = this.props.mainPostList[id];
       console.log(postToLike);
       const {text, imgUrl, autor, like, dislike, postDate} = postToLike;
       const action = {
           type: 'ADD_POST',
           text: text,
           imgUrl: imgUrl,
           autor: autor, 
           like: like + 1,
           dislike: dislike,
           postDate: postDate,
           id: id
       }
       dispatch(action);
    }

    handleDislikeClick = (id) => {
        const {dispatch} = this.props;
        const {text, imgUrl, autor, like, dislike, postDate} = this.props.mainPostList[id];
        const action = {
            type: 'ADD_POST',
            text: text,
            imgUrl: imgUrl,
            autor: autor, 
            like: like,
            dislike: dislike + 1,
            postDate: postDate,
            id: id
        }
        dispatch(action);
    }

    render() {
        let currentlyVisible = null;
        let buttonText = null;
        if  (this.state.selectedPost !== null) {
            currentlyVisible = <PostDetail post={this.state.selectedPost}/>
             buttonText="To the posts";
          }
        else if (this.state.formVisible) {
          currentlyVisible = <NewPostForm onAddingNewPost ={this.handleAddNewPost}/>
          buttonText="To the posts";
        }
        else {
          currentlyVisible = <PostList postList = {this.props.mainPostList} onPostSelection={this.handleChangeSelectedPost} onLikeClick={this.handleLikeClick} onDislikeClick={this.handleDislikeClick}/>
          buttonText="Create post";
        }
        return (
        <React.Fragment>
         <Button onClick={this.handleClick}>{buttonText}</Button>
         {currentlyVisible}
        </React.Fragment>
        );
    }
}

PostControl.propTypes = {
    mainPostList: PropTypes.object
}
const mapStateToProps = state => {
    
    console.log(typeof(state.mainPostList));
    let rateArray = [];
    Object.values(state.mainPostList).forEach((post) =>  {
     post['rate'] = post.like - post.dislike;
     rateArray.push(post);
    }
    );

    let sorted = rateArray.sort((a,b) => b.rate - a.rate);

    const arrayToObject  = (array, id) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj, 
            [item[id]] : item,
          };
        }, initialValue);
    };

    let newPostList = arrayToObject(sorted, 'id');
    return {
        mainPostList: newPostList
    }
}
PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;

