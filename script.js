
    $(document).ready(function () {
        $(window).scroll(function () { // check if scroll event happened
            if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
                $(".nav").css({
                    "background-color":"#f8f8f8", 
                });
                $('.menu').css({
                    "background-color": "#f8f8f8"
                });
             // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            } else {
                $(".nav").css("background-color", "#b8c6c6");
                $('.menu').css("background-color", "#b8c6c6");
                 // if not, change it back to transparent
            }
        });
    });