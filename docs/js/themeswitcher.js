let themeCookieName = "theme";
let themes = ['default', 'dark', 'candy'];

$(document).ready(function(){
    let theme = getThemeFromCookie();
    theme = !!theme ? theme : themes[0];
    changeThemeTo(theme);
});

function getThemeFromCookie(){    
    return getCookie(themeCookieName);
}

function changeThemeTo(theme) {
    $('#theme').attr('href', 'css/themes/' + theme + '.css');
    $('#foot-icon').attr('src', 'img/foots-' + theme + '.png');
    if (theme == "default") applyDefault();
    if (theme == "dark") applyDark();
    if (theme == "candy") applyCandy();
    setCookie(themeCookieName, theme);
}

function toggleTheme(){
    let theme = getThemeFromCookie();
    let index = themes.indexOf(theme) + 1;
    if (index >= themes.length) index = 0;
    let newTheme = themes[index];
    changeThemeTo(newTheme);
}

/**
 * specific stuff for dark here
 */
function applyDark(){ 
    $('#nav').addClass('navbar-dark').removeClass('navbar-light');
}

/**
 * specific stuff for default here
 */
function applyDefault(){
    $('#nav').addClass('navbar-light').removeClass('navbar-dark');
}

/**
 * specific stuff for candy here
 */
function applyCandy(){ 
    $('#nav').addClass('navbar-light').removeClass('navbar-dark');
}