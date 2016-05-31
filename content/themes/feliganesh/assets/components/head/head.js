angular.module('head', [])


.factory('animateHead', function() {

    function head () {
        $(document).ready(function() {
            var longestDelay,
                slowerPiece,
                K = 0.18;
       


            $('svg.head').click(function() {

                console.log('hello')

                $('.image-layer').css('display', 'none');

                $('.piece').each(function(index) {
                    var delay = Math.sin(index * K);

                    if (!longestDelay || delay > longestDelay) {
                        longestDelay = delay;
                        slowerPiece = index;
                    }

                    $(this).css({
                        'animation-delay': delay + 's'
                    })
                    $(this).addClass('piece-animation');
                });


                $('.piece').eq(slowerPiece).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.svg').removeClass('breath');
                    $(document).trigger('endHeadAnimation');
                });
            });



        });
    }



    return head;

});
