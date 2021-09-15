$('.message .close')
    .on('click', function () {
        $(this)
            .closest('.message')
            .transition('fade')
            ;
    });

// Init AOS
function aos_init() {
    AOS.init({
        duration: 1000,
        once: true
    });
}
$(window).on('load', function () {
    aos_init();
});