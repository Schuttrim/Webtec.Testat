let gallery = {
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
    
    $('#Gallery-Image').attr('src', path);


    /*this pole crap doesn't work
    anyway i'll leave this here to show the effort of non working pole crap....

    why...

    why?

    $.ajax({
        type: 'GET',
        url: path,
        asnyc: true,
        beforeSend: function(){
            console.log("loading image: ", path);
            //gallery.container.append(gallery.loader);
        },
        success: function(data) {
            console.log("success");
            
            var img = new Image();
            img.src = 'data:image/jpeg;base64,' +hexToBase64(data);

            document.body.appendChild(img);
            // $('#Gallery-Content').append(img);
            $('#Gallery-Image').attr('src', 'data:image/jpeg;base64,'+ hexToBase64(data));
            //gallery.container.find(gallery.loader).remove();
        },
        error: function(xhr,status,error) {
            console.log("error",error);
        }
    });
    hexToBase64() = function(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));}
    */
}


function getImagePath(imageName) {
    return getBasePath() + '/img/gallery/' + imageName;
}