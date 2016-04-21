import angular from 'angular';
import filterLinkTpl from './filter-link.tpl.html!text';

class FilterLinkCtrl {
    
    constructor($scope, store, todoActions) {
    	this.$scope = $scope;
    	this.store = store;
    	this.todoActions = todoActions;

    	this.unsubscribe = this.store.subscribe(() => this.updateActive());
    	
    	this.ngOnInit();

    	this.$scope.$on('$destroy', this.ngOnDestroy.bind(this));
    }

    ngOnInit() {
    	this.updateActive();
    }
    
    ngOnDestroy() {
    	this.unsubscribe();
    }

    applyFilter(filter) {
    	this.store.dispatch(this.todoActions.setCurrentFilter(this.filter));
    }

    updateActive() {
    	this.active = (this.filter == this.store.getState().todo.currentFilter);
    }
}

FilterLinkCtrl.$inject = ['$scope', 'store', 'todoActions'];

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