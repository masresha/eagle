(function(angular) {
    'use strict';
    var vacancyAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/vacancy/edit/edit.html',
        controller:'VacancyAppEditController',
    }

    angular.module('components.vacancy')
            .component('vacancyAppEdit',vacancyAppEdit);
})(window.angular);
