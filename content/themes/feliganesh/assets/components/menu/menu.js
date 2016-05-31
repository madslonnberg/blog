angular.module('menu', [])


.factory('animateMenu', function() {

    return function menu() {
        $(document).ready(function() {

            $(this).on('endHeadAnimation', function() {
                $('svg.menu').css('display', 'block');
                $('svg.head').css('display', 'none');

                $('svg.menu path').each(function(index) {

                    var self = $(this);

                    var length = self[0].getTotalLength();

                    self.css({
                        'stroke-dasharray': length.toString(),
                        'stroke-dashoffset': length.toString()
                    });

                    self.addClass('stroke-animation');

                })
                $('.thoughts, .inspiration, .internship').children().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                    $(this).addClass('fill-white');
                    $('image').addClass('fill-image');
                    $('.image-stroke path').addClass('stroke-out');
                    // $('.background-white').addClass('fill-white');
                });

                $('.about, .projects').children().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                    $(this).addClass('fill-white');
                });
            })
        });
    }

})
