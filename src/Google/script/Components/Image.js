import React, { Component } from 'react';
import '../../css/Image.css';

class Image extends Component {
    render() {
        return <div className='image' style={this.props.style}/>
    }
}

export default Image;