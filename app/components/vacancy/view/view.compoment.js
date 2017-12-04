(function(angular) {
    'use strict';
    var vacancyAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/vacancy/view/view.html',
        controller:'VacancyAppViewController',
    }

    angular.module('components.vacancy')
            .component('vacancyAppView',vacancyAppView);
})(window.angular);
