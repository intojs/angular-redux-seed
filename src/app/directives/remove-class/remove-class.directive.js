var removeClassLink = function(scope, elem, attrs) {
	if (attrs.removeClass) {
		elem.removeClass(attrs.removeClass);
	}
};

var removeClass = function() {
 	return {
 		restrict: 'A',
 		link: removeClassLink
 	};
 };

  export default angular.module('app.removeClass', [])
 	.directive('removeClass', removeClass)
 	.name;