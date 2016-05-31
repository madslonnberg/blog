angular.module('introductionEffects', ['head', 'menu'])

.controller('introductionController', ['$scope', 'animateMenu', 'animateHead', function($scope , animateMenu, animateHead){
	animateMenu();
	animateHead();
}])