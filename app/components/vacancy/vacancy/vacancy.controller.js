(function(angular) {
    'use strict'

    function VacancyController($stateParams,$filter ,AuthService, $http, $uibModal, $scope, $rootScope,Excel,$timeout) {
        var ctrl = this;
         $scope.exportToExcel=function(tableId){ // ex: '#my-table'
            var exportHref=Excel.tableToExcel(tableId,'WireWorkbenchDataExport');
            $timeout(function(){location.href=exportHref;},100); // trigger download
         }
       
        ctrl.vacancies = [];
        $http.get(getVacancyURL).then(function(res) {
            ctrl.vacancies = res.data;
            console.log(ctrl.vacancies);
        })
 
        ctrl.createVacancy = function(size) {
            var modalInstance = $uibModal.open({
                component: 'vacancyAppCreate',
            });
            modalInstance.result.then(function() {
                
                // $http.post('/user',user).then(function(ok){
                //     ctrl.users.push(user)
                // },function(err){

                // });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.delete = function(size, user) {

            var modalInstance = $uibModal.open({
                component: 'vacancyAppDelete',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)

                $http.delete('/user', user).then(function(ok) {
                    ctrl.users.push(user)
                }, function(err) {

                });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.edit = function(size, vacancy) {
            
            var modalInstance = $uibModal.open({
                component: 'vacancyAppEdit',
                backdrop: 'static',
                resolve: {
                    vacancy: function() {
                        return vacancy;
                    }
                }
            });
            modalInstance.result.then(function(vacancy) {
                console.log(vacancy._id);
                $http.put(getVacancyURL+"/"+vacancy._id,vacancy).then(function(ok){
                    console.log("Done Editing");
                 $("#infosuccess").show().delay(2000).fadeOut();
            ctrl.dismiss({$value: 'cancel'});
               },function(err){
            $("#infofail").show().delay(2000).fadeOut();
                   //say smtg here
                   console.log(vacancy);
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }

        ctrl.view = function(size, vacancy) {
          var modalInstance = $uibModal.open({
                component: 'vacancyAppView',
               
                resolve: {
                    vacancy: function() {
                        return vacancy;
                    }
                }
            });
           
        }
    }

    angular.module('components.vacancy')
        .controller('VacancyController', VacancyController)
        .factory('Excel',function($window){
        var uri='data:application/vnd.ms-excel;base64,',
            template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
            format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
        return {
            tableToExcel:function(tableId,worksheetName){
                var table=$(tableId),
                    ctx={worksheet:worksheetName,table:table.html()},
                    href=uri+base64(format(template,ctx));
                return href;
            }
        };
    });
})(window.angular);