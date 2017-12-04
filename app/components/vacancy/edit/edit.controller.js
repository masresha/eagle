(function(angular) {
    'use strict';
    function VacancyAppEditController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            ctrl.vacancy = ctrl.resolve.vacancy;
          console.log(ctrl.vacancy);
          console.log(ctrl.vacancy._id);
            console.log("Controller is being initialized");
           
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.vacancy});
          console.log(ctrl.vacancy);     
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.vacancy')
            .controller('VacancyAppEditController',VacancyAppEditController);
})(window.angular);
