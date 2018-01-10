import { ImagesView } from '../views/ImagesView';

export class ImagesController {

    start() {
        var images = JSON.parse(localStorage.getItem('images'));
        let imageView = new ImagesView();
        if(images) imageView.render(images);
    }

    getImages() {
        return JSON.parse(localStorage.getItem('images'));
    }
    
}