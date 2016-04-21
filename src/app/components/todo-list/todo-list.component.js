import angular from 'angular';
import todoListTpl from './todo-list.tpl.html!text';
import visibleTodos from './visible-todos.filter.js';

class TodoListCtrl {
    constructor($scope, store) {

    	let unsubscribe = store.subscribe(()=> {
    		let state = store.getState();

    		this.todos = state.todo.todos;
    		this.currentFilter = state.todo.currentFilter;
    	});

		$scope.$on('$destroy', unsubscribe);
    }
}

TodoListCtrl.$inject = ['$scope', 'store'];

var todoList = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		scope: {},
 		template: todoListTpl,
 		controller: TodoListCtrl,
 		controllerAs: 'vm',
 		bindToController: {}
 	};
 };

 export default angular.module('app.todoList', [])
 	.directive('todoList', todoList)
 	.filter('visibleTodos', visibleTodos)
 	.name;