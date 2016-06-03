$(document).ready(function() {
    $('a.nav-toggle-btn').click(function() {
        $(this).closest('#nav').find('ul').toggleClass("active");
        return false;
    });
});
