import Dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';

class MailStore extends EventEmitter {
    constructor() {
        super();

        this.inboxList = [
            {
                id: 123123123,
                sender: 'Alex Cutcher',
                title: 'Christmas plans'
            },
            {
                id: 456456456,
                sender: 'Robert Johns',
                title: 'Birthday present'
            },
        ]
    }

    addLetter(sender, title) {
        const id = Date.now();
        this.inboxList.push({
            id,
            sender: sender,
            title: title
        });

        this.emit('mail received');
    }

    getMail() {
        return this.inboxList;
    }

    handleActions(action) {
        switch (action.type){
            case 'REFRESH_INBOX':
                this.addLetter(action.sender, action.title);
                break;

            default:
                break;
        }
    }
}

const mailStore = new MailStore();
Dispatcher.register(mailStore.handleActions.bind(mailStore));

export default mailStore;
