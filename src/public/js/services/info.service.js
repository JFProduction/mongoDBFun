app.service('InfoService', function($http) {
    this.getUser = function($scope) {
        $http({
            url: 'getUser',
            method: 'GET'
        }).then(function(response) {
            $scope.user = response.data;
        });
    }
});