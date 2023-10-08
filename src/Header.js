import React from "react";
import {  Row, Col } from "react-bootstrap";

function Header() {
    const myStyle = {
        height: '50px',
        width: '50px'
    }
    return (
     <React.Fragment>
    
       <Row>
       <Col xs={11}><h1><strong>POST PLACE</strong></h1></Col> 
        <Col><img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/heart-pulse-512.png" alt="logo" style={myStyle}/></Col>
        </Row>
     </React.Fragment>
    )
}

export default Header;