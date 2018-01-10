import { AddImageView } from '../views/AddImageView';

export class AddImageController {

    start() {
        let imageView = new AddImageView();
        imageView.render();
    }

    add(data) {
        let images = JSON.parse(localStorage.getItem('images'));

        data = { link: data };

        if(!images) {
            localStorage.setItem('images', JSON.stringify([data]));
            return;
        }

        images.push(data);
        localStorage.setItem('images', JSON.stringify(images));
    }

}