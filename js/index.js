'use strict';

import { Image } from './models/Image';
import { ImagesView } from './views/ImagesView';
import { AddImageView } from './views/AddImageView';

let imagesView = new ImagesView();
let addImageView = new AddImageView();

imagesView.render();
addImageView.render();