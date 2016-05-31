angular.module('panelModule', [])

.controller('panelController', ['$scope', function($scope) {
    $scope.images = [
        { src: '/static/images/about.jpg', caption: 'About', link: '/about' },
        { src: '/static/images/projects.jpg', caption: 'Projects', link: '/projects' },
        { src: '/static/images/internship.jpg', caption: 'Internship', link: '/internship' },
        { src: '/static/images/thoughts.jpg', caption: 'Thoughts', link: '/thoughts' },
        { src: '/static/images/inspiration.jpg', caption: 'Inspiration', link: '/inspiration' },
    ]
}])


.directive('panel', ['$document', 'desandro', '$window', function($document, desandro, $window) {
    var imagesLoaded = desandro.imagesLoaded,
        Masonry = desandro.Masonry;

    return {
        restrict: 'C',
        link: function(scope, element) {
            var grid = element[0];
            var msnry;


            scope.$on('activeMansory', function() {
                imagesLoaded(grid, function() {
                    // init Isotope after all images have loaded
                    msnry = new Masonry(grid, {
                        itemSelector: '.item',
                        columnWidth: '.sizer',
                        percentPosition: true
                    });

                    msnry.layout();

                });
            });





        }
    }
}])

.directive('monitor', ['$timeout', function($timeout) {

    return {
        link: function(scope, element) {

            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('activeMansory');
                }, 600)
            }



        }
    }
}])

.factory('desandro', ['$window', function($window) {
    return {
        imagesLoaded: $window.imagesLoaded,
        Masonry: $window.Masonry
    }
}])
