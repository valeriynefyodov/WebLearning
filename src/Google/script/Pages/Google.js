import React, { Component } from 'react';
import '../../css/Google.css';

import Header from '../Components/Header';
import Content from '../Components/Content';

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
