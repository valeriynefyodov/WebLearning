import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mail extends Component {
    render () {
        return <div><h1>This is Mail</h1><Link to='/'>Home</Link></div>
    }
}

export default Mail;
