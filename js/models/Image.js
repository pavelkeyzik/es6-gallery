export class Image {

    constructor(link) {
        this.link = link;
        this.images = JSON.parse(localStorage.getItem('images')) || [];
    }

    addImage(data, cb) {
        this.images.push(data);
        localStorage.setItem('images', JSON.stringify(this.images));
        cb(true);
    }

    getImages() {
        return this.images;
    }

}