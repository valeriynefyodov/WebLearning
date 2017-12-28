import React, { Component } from 'react';
import '../css/Search.css';
import '../img/Google_mic.svg.png'

class Search extends Component {
    render () {
        return (
            <form className='search'>
                <input type="text" className='search__input' placeholder='Введите поисковый запрос или URL'/>
                <div className='search__voice-search' />
            </form>
        );
    }
}

export default Search;
