let lastVisitsCookieName = 'lastVisits';

$(document).ready(function(){
    addVisit();
});

function getLastVisits(){
    let cookie = getCookie(lastVisitsCookieName);
    var array = new Array();
    if (cookie) {
        array = JSON.parse(cookie).map(value => new Date(value));
    }
    return array;
}

function addVisit(){    
    let array = getLastVisits();
    array.push((new Date()));
    setCookie(lastVisitsCookieName, JSON.stringify(array));
}