angular
    .module('AngularTemplateQuickApp')
    .factory('TestService', function TestService($q, $timeout) {
            var service = {
                someField: 'someValue',
                someMethod: someMethod
            };

            var somePrivateField;

            return service;

            ////////////

            function someMethod(someParam) {
                $timeout(function () {
                    console.log('test');
                }, 1000);
            }
        }
    );

    