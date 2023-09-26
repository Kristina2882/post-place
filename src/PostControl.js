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

    render() {
        let currentlyVisible = null;
        if (this.state.formVisible) {
          currentlyVisible = <NewPostForm/>
        }
        else {
          currentlyVisible = <PostList />
        }
        return (
        <React.Fragment>
         {currentlyVisible}
        </React.Fragment>
        );
    }
}

export default PostControl;