let gallery = {
    loader: $('<div />', {class: 'loader'}),
    container: $('#Gallery-Content'),
    files: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
    currentFile: 0,
    
}

$(document).ready(function(){
    loadImage(getImagePath(gallery.files[gallery.currentFile]));
});

$('#Gallery-Next').on('click', function(){
    console.log("gallery-next");
    gallery.currentFile++;
    if (gallery.currentFile >= gallery.files.length)
        gallery.currentFile = 0;    
    loadImage(getImagePath(gallery.files[gallery.currentFile]));
});

$('#Gallery-Previous').on('click', function(){
    console.log("gallery-previous");
    gallery.currentFile--;
    if (gallery.currentFile < 0)
        gallery.currentFile = gallery.files.length - 1;    
    loadImage(getImagePath(gallery.files[gallery.currentFile]));
});

function loadImage(path) {
    $.ajax({
        type: 'GET',
        url: path,
        dataType: 'image/jpg',
        asnyc: false,
        beforeSend: function(){
            console.log("loading image: ", path);
            //gallery.container.append(gallery.loader);
        },
        success: function(data) {
            console.log("success", data);
            $('#Gallery-Image').attr('src', 'data:image/png;base64,'+data);
            //gallery.container.find(gallery.loader).remove();
        },
        error: function(err) {
            console.log("error",err);
        }
    });
}

function getImagePath(imageName) {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    return baseUrl + '/img/gallery/' + imageName;
}