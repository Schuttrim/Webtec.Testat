let lastVisitsCookieName = 'lastVisits';

$(document).ready(async function(){
    addVisit();
    displayLastVisits();
});

function displayLastVisits(){
    let liitems = new Array();
    let lastVisits = getLastVisits().sort((a, b) =>  new Date(b) - new Date(a));
    lastVisits = lastVisits.slice(1, lastVisits.length > 11 ? 11 : lastVisits.length) // take last 10 visits without the newest

    lastVisits.forEach(item => {
        $("#LastVisitsContent").append('<li class="list-group-item">' + moment(item).format("DD.MM.YYYY HH.mm:ss") + '</li>');
        liitems.push()
    });
}

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