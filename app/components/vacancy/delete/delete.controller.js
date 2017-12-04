(function(angular) {
    'use strict';
    function VacancyDeleteController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.user = ctrl.resolve.user;

            console.log(ctrl.user);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.user});

        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.vacancy')
            .controller('VacancyDeleteController',VacancyDeleteController);
})(window.angular);
