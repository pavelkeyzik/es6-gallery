import Rx from 'rxjs/Rx';

export class Image {

    constructor(link) {
        this.link = link;
<<<<<<< HEAD
        this.subject = new Rx.BehaviorSubject('');
=======
        this.subject = new Rx.BehaviorSubject('App runned...');
>>>>>>> 98791b42c41a752bbb69f19b05203cd24ec4ef4d
        this.images = JSON.parse(localStorage.getItem('images')) || [];
    }

    addImage(data) {
        this.images.push(data);
        localStorage.setItem('images', JSON.stringify(this.images));
        this.subject.next();
    }

    getImages() {
        return this.images;
    }

}