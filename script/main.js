$(document).ready(function() {
    $('.hexal').mouseover(function() {
        $(this).css({'border':'0.5em solid #a3bbc7'});
        $('.hexal__buttons').css({'display':'flex'});
    });
    $('.hexal').mouseleave(function() {
        $(this).css({'border':'0.5em solid #e6c69e'});
        $('.hexal__buttons').css({'display':'none'});
    });
    $('.hexal__ghpages').click(function() {
        window.location = 'https://veronikamishkovec.github.io/test-hexal/';
    });
    $('.hexal__github').click(function() {
        window.location = 'https://github.com/VeronikaMishkovec/test-hexal';
    });

    $('.auris').mouseover(function() {
        $(this).css({'border':'0.5em solid #a3bbc7'});
        $('.auris__buttons').css({'display':'flex'});
    });
    $('.auris').mouseleave(function() {
        $(this).css({'border':'0.5em solid #e6c69e'});
        $('.auris__buttons').css({'display':'none'});
    });
    $('.auris__ghpages').click(function() {
        window.location = 'https://veronikamishkovec.github.io/auris/';
    });
    $('.auris__github').click(function() {
        window.location = 'https://github.com/VeronikaMishkovec/auris';
    });
})