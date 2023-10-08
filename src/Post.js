import React from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function Post(props) {
    const myStyle = {
        heigth: '300px',
        width: '400px'
    }
    const btnStyle = {
        heigth: '15px',
        width: '25px'
    }
    return (
     <React.Fragment>
        <br/>
        <div onClick={() => props.whenPostClicked(props.id)}>
        <img src={props.imgUrl} style={myStyle}/>
        <h3>{props.text}</h3>
        <h5><em>By: {props.autor} | Date: {props.postDate.toDateString()} | 🧡 : {props.like} 👎 : {props.dislike}</em></h5> 
        </div>
        <Button onClick={() => props.whenLikeClicked(props.id)} variant="outline-light" size="lg" ><img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/heart-64.png"style={btnStyle}/></Button> <Button onClick={() => props.whenDislikeClicked(props.id)} variant="outline-light"><img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/hand-thumbs-down-64.png" style={btnStyle}></img></Button>
        <hr/>
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