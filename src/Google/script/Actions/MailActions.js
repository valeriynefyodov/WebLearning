import Dispatcher from '../Dispatcher';

export function refreshInbox (sender, title) {
    Dispatcher.dispatch({
        type: "REFRESH_INBOX",
        sender,
        title
    });
}

