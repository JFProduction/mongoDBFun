app.controller('MainCtrl', function($scope, InfoService) {
    InfoService.getUser($scope);
});