(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var vacancy = {
        templateUrl: 'app/components/vacancy/vacancy/vacancy.html',
        controller: 'VacancyController'
    }
    //Call angular component function with my module
    angular.module('components.vacancy')
        .component('vacancy', vacancy)
        .config(vacancyConfig);
    vacancyConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function vacancyConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('vacancy', {
                url: '/vacancy',
                component: 'vacancy',
                parent: 'app',
                data: {
                    requireLogin: true,
                    requireAdmin: true,
                }
            })
            
    }

})(window.angular);