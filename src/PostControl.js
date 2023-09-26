import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class PostControl extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        formVisible: false
    };
}

    handleClick = () => {
        this.setState(prevState =>  ({
         formVisible: !prevState.formVisible
        }));
    }


    render() {
        let currentlyVisible = null;
        let buttonText = null;
        if (this.state.formVisible) {
          currentlyVisible = <NewPostForm/>
          buttonText="To the posts";
        }
        else {
          currentlyVisible = <PostList />
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