(function(angular) {
    'use strict';
    function VacancyAppCreateController($stateParams,$filter ,AuthService, $http, $uibModal, $scope, $rootScope){
        var ctrl =this;
        $scope.jobcategory_name = "maths";
        //   $(document).ready(function(){
        //         $("#myInput").ethiopicInput();
        //         $("#inputType").on('click',function(){
        //         if($(this).text() === 'ET'){
        //         $(this).text('EN');
        //         $('#myInput').unbind();
        //         }
        //         else{
        //         $(this).text('ET');
        //         $("#myInput").ethiopicInput();
        //         }
        //     });
        // });
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.user = ctrl.resolve.user;

            console.log(ctrl.user);
            $http.get(postJobCategoryURL).then(function(res) {
            $scope.jobcategories = res.data;
            console.log(ctrl.jobcategories);
        })
        };
       
        ctrl.ok = function () {
        var createvacancyenglishmysql = {
            title:ctrl.position,
            description: ctrl.description,
            job_category: ctrl.job_category,
            exprience:ctrl.exprience,
            qualifications:ctrl.qualifications,
            due_date:$filter('date')(ctrl.due_date,"yyyy-MM-dd"),
            phone:ctrl.mobile,
            level:ctrl.level
        };
        var createvacancy = {
            position:ctrl.position,
            description: ctrl.description,
            category: ctrl.job_category,
            exprience:ctrl.exprience,
            qualifications:ctrl.qualifications,
            due_date:$filter('date')(ctrl.due_date,"yyyy-MM-dd"),
            salary: ctrl.salary,
            number_required:ctrl.number_required,
            contact:ctrl.contact,
            mobile:ctrl.mobile,
            level:ctrl.level
        };
        ctrl.createvacancydata = createvacancy;  
        console.log(ctrl.createvacancydata);
        $http.post(getVacancyURL,createvacancy).then(function(ok){
            console.log("done mongo works");
            $("#infosuccess").show().delay(2000).fadeOut();
             },function(err){
             console.log("error mongo failed");
            $("#infofail").show().delay(2000).fadeOut();
                   
             });
        ctrl.createvacancyenglishmysqldata = createvacancyenglishmysql;  
        console.log(ctrl.createvacancyenglishmysqldata);
	    $http.post(getVacancyMysqlURL,createvacancyenglishmysql).then(function(ok){
            $("#infosuccess").show().delay(2000).fadeOut();
	   console.log("mysql angular work");
            ctrl.dismiss({$value: 'cancel'});
            },function(err){
	    console.log("mysql angular error");
            $("#infofail").show().delay(2000).fadeOut();
                   
             });
             
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.vacancy')
            .controller('VacancyAppCreateController',VacancyAppCreateController);
})(window.angular);
