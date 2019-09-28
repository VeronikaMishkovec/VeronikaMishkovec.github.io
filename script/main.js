$(document).ready(function() {
    $('.wheels').mouseover(function() {
        $(this).css({'border':'0.5em solid #a3bbc7'});
        $('.wheels__buttons').css({'display':'flex'});
    });
    $('.wheels').mouseleave(function() {
        $(this).css({'border':'0.5em solid #e6c69e'});
        $('.wheels__buttons').css({'display':'none'});
    });
    $('.wheels__ghpages').click(function() {
        window.location = 'https://veronikamishkovec.github.io/wheels/';
    });
    $('.wheels__github').click(function() {
        window.location = 'https://github.com/VeronikaMishkovec/wheels';
    });
    /*------------------------------------------------------------------------- */
    $('.anix').mouseover(function() {
        $(this).css({'border':'0.5em solid #a3bbc7'});
        $('.anix__buttons').css({'display':'flex'});
    });
    $('.anix').mouseleave(function() {
        $(this).css({'border':'0.5em solid #e6c69e'});
        $('.anix__buttons').css({'display':'none'});
    });
    $('.anix__ghpages').click(function() {
        window.location = 'https://veronikamishkovec.github.io/test_anixmedia/';
    });
    $('.anix__github').click(function() {
        window.location = 'https://github.com/VeronikaMishkovec/test_anixmedia/tree/master';
    });
    /*------------------------------------------------------------------------- */
    $('.doob').mouseover(function() {
        $(this).css({'border':'0.5em solid #a3bbc7'});
        $('.doob__buttons').css({'display':'flex'});
    });
    $('.doob').mouseleave(function() {
        $(this).css({'border':'0.5em solid #e6c69e'});
        $('.doob__buttons').css({'display':'none'});
    });
    $('.doob__ghpages').click(function() {
        window.location = 'https://veronikamishkovec.github.io/doob/';
    });
    $('.doob__github').click(function() {
        window.location = 'https://github.com/VeronikaMishkovec/doob';
    });
    /*-------------------------------------------------------------------------*/
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
    /*-------------------------------------------------------------------------*/
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