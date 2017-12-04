(function(angular) {
    'use strict';
    var vacancyAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/vacancy/create/create.html',
        controller:'VacancyAppCreateController',
    }

    angular.module('components.vacancy')
            .component('vacancyAppCreate',vacancyAppCreate);
})(window.angular);
