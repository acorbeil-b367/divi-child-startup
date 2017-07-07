jQuery(document).ready(function(){
    $ = jQuery;
    var header = $('.header-home');

    $( window ).resize(function() {
        var logoContainerHeight = $('.logo_container').outerHeight();
        var windowHeight = $(window).height();
        var totalHeight = windowHeight - logoContainerHeight;

        if(header.outerHeight() != totalHeight 
            && jQuery(window).height() > '798'
            && !window.mobilecheck()){
            header.outerHeight(windowHeight - logoContainerHeight);
        }
    });
});