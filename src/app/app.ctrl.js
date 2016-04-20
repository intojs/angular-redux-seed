class AppCtrl {
	constructor($scope) {

		$scope.showLoader = false;

		$scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			$scope.showLoader = true;
		});

		$scope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			$scope.showLoader = false;
			this.scrollTop();
		});

		$scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
			$scope.showLoader = false;
		});

		$scope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
			$scope.showLoader = false;
		});
	}

	scrollTop() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
}

AppCtrl.$inject = ['$scope', '$timeout'];

export default AppCtrl;