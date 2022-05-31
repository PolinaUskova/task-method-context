import internal from 'stream';
import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    save: 0,
    subscribe() {
        this.save = this.countPlus.bind(this);
        EventEmitter.on('click', this.save);
    },
    unsubscribe() {
        EventEmitter.off('click', this.save);
    },
    countPlus() {
        this.count++;
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {},
};
