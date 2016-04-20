var conf = function ($urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
};

conf.$inject = ['$urlRouterProvider'];

export default conf;