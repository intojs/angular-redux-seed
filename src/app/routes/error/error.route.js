var errorConf = function($stateProvider) {
    $stateProvider.state('error', {
        url: '/error',
        template: '<div>Oups... Error!</div>'
    });
};

errorConf.$inject = ['$stateProvider'];

export default angular.module('app.error', [])
	.config(errorConf)
	.name;