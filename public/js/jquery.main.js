$(document).ready(function() {
    $('a.nav-toggle-btn').click(function() {
        $(this).closest('#nav').find('ul').toggleClass("active");
        return false;
    });
    $('a.open-popup').click(function() {
        $('#popup-holder').show();
        return false;
    });
    $(document).click(function(e) {
        if ($(e.target).parents().filter('#popup-holder:visible').length != 1)
            $("#popup-holder").hide();
    });
    $('a.close-popup').click(function(e) {
        $("#popup-holder").hide();
        return false;
    });
});