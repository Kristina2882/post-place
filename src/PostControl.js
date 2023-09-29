import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

class PostControl extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        formVisible: false, 
        mainPostList: [],
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
        const newMainPostList = this.state.mainPostList.concat(newPost);
        this.setState({
           formVisible: false,
           mainPostList: newMainPostList
        });
    }
    
    handleChangeSelectedPost = (id) => {
        const newSelectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
        this.setState({
            selectedPost: newSelectedPost
        });
    }

    handleLikeClick = (id) => {
        let updatedPost = this.state.mainPostList.filter(post => post.id === id)[0];
        const likes = updatedPost.like + 1;
        updatedPost.like = likes;
        let newMainPostList = this.state.mainPostList.filter(post => post.id !== id)
                              .concat(updatedPost);
        this.setState({
            mainPostList: newMainPostList
        });
    }

    handleDislikeClick = (id) => {
        let updatedPost = this.state.mainPostList.filter(post => post.id === id)[0];
        updatedPost.dislike +=1;
        let newMainPostList = this.state.mainPostList.filter(post => post.id !== id).concat(updatedPost);
        this.setState({
         mainPostList: newMainPostList
        });
    }

    render() {
        let currentlyVisible = null;
        let buttonText = null;
        if (this.state.selectedPost !== null) {
            currentlyVisible = <PostDetail post={this.state.selectedPost}/>
            buttonText="To the posts";
        }
        else if (this.state.formVisible) {
          currentlyVisible = <NewPostForm onAddingNewPost ={this.handleAddNewPost}/>
          buttonText="To the posts";
        }
        else {
          currentlyVisible = <PostList postList = {this.state.mainPostList} onPostSelection={this.handleChangeSelectedPost} onLikeClick={this.handleLikeClick} onDislikeClick={this.handleDislikeClick}/>
          buttonText="Create post";
        }
        return (
        <React.Fragment>
         <button onClick={this.handleClick}>{buttonText}</button>
         {currentlyVisible}
        </React.Fragment>
        );
    }
}

export default PostControl;