import angular from 'angular';
import addTodoTpl from './add-todo.tpl.html!text';

class AddTodoCtrl {
    constructor(store, todoActions) {
    	this.store = store;
    	this.todoActions = todoActions;

    	this.models = {
    		todo: ''
    	};
    }

    addTodo(todo) {
    	if (todo) {
    		this.store.dispatch(this.todoActions.addTodo(todo));
    		this.models.todo = '';
    	}
    }
}

AddTodoCtrl.$inject = ['store', 'todoActions'];

var addTodo = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		scope: {},
 		template: addTodoTpl,
 		controller: AddTodoCtrl,
 		controllerAs: 'vm',
 		bindToController: {}
 	};
 };

 export default angular.module('app.addTodo', [])
 	.directive('addTodo', addTodo)
 	.name;