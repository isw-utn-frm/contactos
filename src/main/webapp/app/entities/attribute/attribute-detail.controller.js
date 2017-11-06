(function() {
    'use strict';

    angular
        .module('contacts2App')
        .controller('AttributeDetailController', AttributeDetailController);

    AttributeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Attribute', 'Contact'];

    function AttributeDetailController($scope, $rootScope, $stateParams, previousState, entity, Attribute, Contact) {
        var vm = this;

        vm.attribute = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('contacts2App:attributeUpdate', function(event, result) {
            vm.attribute = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
