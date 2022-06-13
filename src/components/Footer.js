import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand> My Site</Navbar.Brand>
                <div>sample https://github.com/gshakir/S3-Infrequent-Access-Calculator</div>
            </Navbar>
        );
    }
}