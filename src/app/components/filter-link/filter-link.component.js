import angular from 'angular';
import filterLinkTpl from './filter-link.tpl.html!text';

class FilterLinkCtrl {
    
    constructor() {
    }

    applyFilter(filter) {
    	console.log(filter);
    }
}

FilterLinkCtrl.$inject = [];

var filterLink = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		scope: {},
 		template: filterLinkTpl,
 		controller: FilterLinkCtrl,
 		controllerAs: 'vm',
 		bindToController: {
 			filter: '@'
 		}
 	};
 };

 export default angular.module('app.filterLink', [])
 	.directive('filterLink', filterLink)
 	.name;

 	// https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.ygsd8bvsc
 	// https://plnkr.co/edit/3mhKoOOAKJp27E2FpIOq?p=preview