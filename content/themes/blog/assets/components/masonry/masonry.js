angular.module('masonryModule', [])

.directive('masonry', ['$document', 'desandro', '$window', function($document, desandro, $window) {
    var imagesLoaded = desandro.imagesLoaded,
        Masonry = desandro.Masonry;

    return {
        restrict: 'C',
        link: function(scope, element) {
            var grid = element[0];
            var msnry;

            imagesLoaded(grid, function(){
              msnry = new Masonry(grid, {
                  itemSelector: '.item',
                  gutter: '.gutter',
                  columnWidth: '.sizer',
                  percentPosition: true
              });

              msnry.layout();
            });




        }
    };
}])

.factory('desandro', ['$window', function($window) {
    return {
        imagesLoaded: $window.imagesLoaded,
        Masonry: $window.Masonry
    };
}]);
