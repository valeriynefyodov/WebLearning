import Dispatcher from '../Dispatcher';
import $ from 'jquery';

export function refreshInbox () {
    $.getJSON('http://192.168.1.30:8088/inbox.json').then((data) => {
        Dispatcher.dispatch({
            type: 'REFRESH_INBOX',
            data: data
        })
    });
}

