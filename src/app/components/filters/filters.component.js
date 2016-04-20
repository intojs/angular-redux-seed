import angular from 'angular';
import filtersTpl from './filters.tpl.html!text';

class FiltersCtrl {
    
    constructor() {
    }
}

FiltersCtrl.$inject = [];

var filters = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		scope: {},
 		template: filtersTpl,
 		controller: FiltersCtrl,
 		controllerAs: 'ctrl,',
 		bindToController: {}
 	};
 };

 export default angular.module('app.filters', [])
 	.directive('filters', filters)
 	.name;