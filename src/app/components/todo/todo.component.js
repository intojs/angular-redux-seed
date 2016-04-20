import angular from 'angular';
import todoTpl from './todo.tpl.html!text';

class TodoCtrl {
    constructor(store, todoActions) {
    	this.store = store;
    	this.todoActions = todoActions;
    }

    onTodoClick(id) {
    	this.store.dispatch(this.todoActions.toggleTodo(id));
    }
}

TodoCtrl.$inject = ['store', 'todoActions'];

var todo = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		scope: {},
 		template: todoTpl,
 		controller: TodoCtrl,
 		controllerAs: 'vm',
 		bindToController: {
 			id: '=',
 			completed: '='
 		}
 	};
 };

 export default angular.module('app.todo', [])
 	.directive('todo', todo)
 	.name;