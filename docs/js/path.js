function getBasePath(){
    var getUrl = window.location;
    return getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
}