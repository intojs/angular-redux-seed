import angular from 'angular';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import { todoReducer } from './reducers/todo.reducer.js';
import { shopReducer } from './reducers/shop.reducer.js';

import { TodoActions } from './actions/todo.actions.js';
import { ShopActions } from './actions/shop.actions.js';

import digestMiddleware from './middlewares/digest.middleware.js';

let combinedReducers = combineReducers({
    todo: todoReducer,
    shop: shopReducer
});

var storeProvider = function() {

    this.$get = function($injector) {

        return createStore(
            combinedReducers, {},
            compose(
                window.devToolsExtension ? window.devToolsExtension() : f => f,
                applyMiddleware(
                    digestMiddleware(
                        $injector.get('$rootScope')
                    )
                )
            )
        );
    };

    this.$get.$inject = ['$injector'];
};

var todoActionsProvider = function() {
    return {
        $get: function() {
            return new TodoActions();
        }
    };
};

var shopActionsProvider = function() {
    return {
        $get: function() {
            return new ShopActions();
        }
    };
};

export default angular.module('app.store', [])
    .provider('store', storeProvider)
    .provider('todoActions', todoActionsProvider)
    .provider('shopActions', shopActionsProvider)
    .name;
