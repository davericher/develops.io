import angular from 'angular';

export default class DevAngular {
    constructor() {
        "use strict";
        var develops = angular.module('develops', []);

        // Social Links
        develops.factory('socialFactory', ['$http', function ($http) {
            return $http.get('/socialLinks');
        }]);

        develops.controller('socialController', ['socialFactory', function (socialFactory) {
            var self = this;
            self.socialLinks = [];
            socialFactory.then( function(results) {
                self.socialLinks = results.data;
            });
        }]);

        // Projects
        develops.factory('projectFactory',['$http', function( $http ) {
            return $http.get('/projects');
        }]);

        develops.controller('projectController', ['projectFactory', function (projectFactory) {
            var self = this;
            self.projects = [];
            projectFactory.then( function(results) {
                self.projects = results.data;
            });
        }])


    }
}

