(function() {
    'use strict';

    angular
        .module('contacts2App')
        .controller('AttributeDialogController', AttributeDialogController);

    AttributeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Attribute', 'Contact'];

    function AttributeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Attribute, Contact) {
        var vm = this;

        vm.attribute = entity;
        vm.clear = clear;
        vm.save = save;
        vm.contacts = Contact.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.attribute.id !== null) {
                Attribute.update(vm.attribute, onSaveSuccess, onSaveError);
            } else {
                Attribute.save(vm.attribute, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('contacts2App:attributeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
