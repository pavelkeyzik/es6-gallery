require('rxjs/Rx');

export class Image {

    constructor(link) {
        this.link = link;
        this.subject = new Rx.BehaviorSubject('');
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