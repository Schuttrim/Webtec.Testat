let cookieName = "theme";
let themes = ['default', 'dark', 'candy'];

$(document).ready(function(){
    let theme = getThemeFromCookie();
    theme = !!theme ? theme : themes[0];
    changeThemeTo(theme);
});

function getThemeFromCookie(){    
    let value = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
    return value ? value.pop() : "";
}

function changeThemeTo(theme) {
    $('#theme').attr('href', 'css/themes/' + theme + '.css');
    document.cookie = cookieName + '=' + theme;
}

function toggleTheme(){
    let theme = getThemeFromCookie();
    let index = themes.indexOf(theme) + 1;
    if (index >= themes.length) index = 0;
    let newTheme = themes[index];
    changeThemeTo(newTheme);
}