angular.module('trianglifyModule',[])

.directive('trianglify', ['Trianglify','$window', function(Trianglify,$window) {
    return {
        link: function(scope, element) {
            var pattern = Trianglify({
                cell_size: 60,
                variance: 0.75,
                x_colors: ['hsl(0, 0%, 100%)','hsl(22, 90%, 61%)','hsl(7, 88%, 51%)',"hsl(40, 70%, 44%)"],
                y_colors: 'match_x',
                width: $window.innerWidth,
                height: $window.innerHeight,
                seed: null
            });

            element.css({
                'background': 'url(' + pattern.png() + ') no-repeat 0 0',
                'background-size': 'cover'
            });
        }
    }
}])

.factory('Trianglify', ['$window', function($window){
    return $window.Trianglify;
}])
