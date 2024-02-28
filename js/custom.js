$(function () {

    $('#main').fullpage({
        anchors: ["p1", "p2", "p3", "p4", "p5"],
        menu: '#custom_nav',
        scrollOverflow: false,
        navigation: true,
        paddingTop: '40px',

        afterRender: () => {
            mainVisualLine();
        },

        afterLoad: function (origin, destination, direction, trigger) {
            //destination.index === 0 && mainVisualLine();
            if (destination.index === 0) {
                $('.f_wrap').addClass('on');

            } else {
                $('.f_wrap').removeClass('on')
            }
        },

        onLeave: function (origin, destination, direction, trigger) {
            destination.index === 0 && mainVisualLine();
        },


        responsiveWidth: 768,
        responsiveHeight: 800,

    });
});




function mainVisualLine() {
    const m = document.querySelector('.mainVisual .tit p em')
    const tl = gsap.timeline();
    tl.from(m, {
        width: 0,
        duration: 2,
        delay: 1
    })
}

