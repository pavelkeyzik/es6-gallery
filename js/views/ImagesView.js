var _ = require('lodash');

export class ImagesView {

    render(images) {
        
        fetch('tmp/imagesView.html', {
            method: 'GET'
        })
        .then(response => response.text())
        .then(data => {
            let templateFn = _.template(data);
            let block = document.getElementById('imagesView');

            block.innerHTML = templateFn( { 'data': images } );
        })
        .catch(error => console.log(error));
        
    }

}