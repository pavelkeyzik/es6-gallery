'use strict';

import { Image } from './models/Image';

import { ImagesView } from './views/ImagesView';
import { AddImageView } from './views/AddImageView';

import { ImagesController } from './controllers/ImagesController';
import { AddImageController } from './controllers/AddImageController';

const imagesView = new ImagesView();
const addImageView = new AddImageView();
const imageModel = new Image();

let imagesCtrl = new ImagesController(imagesView, imageModel);
let addImageCtrl = new AddImageController(addImageView, imageModel);

imagesCtrl.start();
addImageCtrl.start();