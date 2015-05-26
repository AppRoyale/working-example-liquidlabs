/**
 * Created by qby on 26.05.15.
 *
 * THE cheap way
 */
Template.dashboard.destroyed = function () {
    $('#header').show();
};

Template.dashboard.onRendered(function(){
    $('#header').hide();

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    /**
     * If this is turned on - navi closes on markdown menus.
     *
    $('.navbar li a').on('click', function () {
        $('.hamburger').click();
    });
    **/
});
