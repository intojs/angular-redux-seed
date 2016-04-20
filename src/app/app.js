/**
 *	app.js
 */

import angular from 'angular';
import 'angular-ui-router';

import appConf from './app.conf.js';
import AppCtrl from './app.ctrl.js';
import appTpl from './app.tpl.html!text';

/**
 *  Store.
 */

import store from './store/store.provider.js';

/**
 *  Components.
 */

import todo from './components/todo/todo.component.js';
import addTodo from './components/add-todo/add-todo.component.js';
import filterLink from './components/filter-link/filter-link.component.js';
import filters from './components/filters/filters.component.js';
import todoList from './components/todo-list/todo-list.component.js';
/**
 *  Directives.
 */

import removeClass from './directives/remove-class/remove-class.directive.js';

/**
 *  Routes.
 */

import home from './routes/home/home.route.js';
import error from './routes/error/error.route.js';


angular.module('app', [
    'ui.router',
    // Store.
    store,
    // Components.
    todo,
    addTodo,
    filterLink,
    filters,
    todoList,
    // Directives.
    removeClass,
    // Services.
    // Routes.
    home,
    error
])
.config(appConf)
.controller('AppCtrl', AppCtrl);

angular.element(document).ready(function() {
    var appDiv = document.getElementById("app");
    appDiv.innerHTML = appTpl;
    angular.bootstrap(angular.element(appDiv), ['app']);
});