import {Injectable} from 'angular2/core';

@Injectable()
export class FirebaseService {

    constructor() {
    }

    async set(path, data) {
        console.log(path);
        const ref = new Firebase(`https://resplendent-fire-9351.firebaseio.com/${path}`);
        console.log(ref);
        ref.set(data);
    }

    async push(path, data) {
        console.log(path);
        const ref = new Firebase(`https://resplendent-fire-9351.firebaseio.com/${path}`);
        console.log(ref);
        ref.push(data);
    }

    async retrieve(path) {
        console.log('just do something');
        return 'returning 5';
        // console.log('async get');
        // console.log(new Firebase(`https://resplendent-fire-9351.firebaseio.com/${path}`));
        // console.log(path);
        // let shasta = new Firebase(`https://resplendent-fire-9351.firebaseio.com/${path}`);
        // console.log(shasta);
        // const dataSnapshot = await shasta.once('value');
        // console.log(dataSnapshot);
        // return dataSnapshot.val();
    }
}
