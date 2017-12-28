import React, { Component } from 'react';
import '../css/Google.css';

import Header from './Header';
import Content from './Content'

class Google extends Component {
    render () {
        return (
            <div className='wrapper'>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Google;
