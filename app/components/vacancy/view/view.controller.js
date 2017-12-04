(function(angular) {
    'use strict';
    function VacancyAppViewController($filter){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.vacancy = ctrl.resolve.vacancy;

            console.log(ctrl.vacancy);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.user});
          console.log(ctrl.user);     
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.vacancy')
            .controller('VacancyAppViewController',VacancyAppViewController);
})(window.angular);
