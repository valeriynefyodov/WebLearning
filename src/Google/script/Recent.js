import React, { Component } from 'react';
import $ from 'jquery';
import '../css/Recent.css';

import Tab from './Tab';

class Recent extends Component {

    constructor(props) {
        super(props);
        this.state = {tabs_data: []};
    }

    componentWillMount() {
        const th = this;
        $.getJSON('http://192.168.1.30:8088/tabs_data.json', function (data) {
            th.setState({tabs_data: data});
        });
    }

    render () {
        return (
            <div className='recent-tabs'>
                {this.state.tabs_data.map( (item, index) => {
                    return <Tab data={item} key={index}/>
                })}
            </div>
        );
    }
}

export default Recent;
