(function(angular) {
    'use strict';
    var vacancyAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/vacancy/delete/delete.html',
        controller:'VacancyDeleteController',
    }

    angular.module('components.vacancy')
            .component('vacancyAppDelete',vacancyAppDelete);
})(window.angular);
