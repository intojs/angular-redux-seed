/**
 *	home.conf.js
 */

import angular from 'angular';
import homeTpl from './home.tpl.html!text';

let homeConf = function($stateProvider) {
    $stateProvider.state('home', {
		url: '/',
        template: homeTpl
	});
};

homeConf.$inject = ['$stateProvider'];

export default angular.module('app.home', [])
	.config(homeConf)
	.name;