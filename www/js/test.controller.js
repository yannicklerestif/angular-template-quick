angular
    .module('AngularTemplateQuickApp')
    .controller(
        "TestCtrl", function ($scope, TestService) {
            var vm = this;
            vm.somePublicField = "some public value";
            vm.TestService = TestService;
            vm.somePublicMethod = function () {
                $scope.$broadcast('some_event', 'some arg');
                $scope.$apply(function () {
                    console.log('applying...');
                })
            };

            $scope.$on('some_event', function (event, arg) {
                console.log('some_event triggered with arg : ' + arg);
            });

        });