import angular from 'angular';

export default class DevAngular {
    constructor() {
        "use strict";
        var develops = angular.module('develops', []);

        // Social Links
        develops.controller('socialController', ['$http', function ($http) {
            var self = this;
            self.socialLinks = [];
            $http.get('/socialLinks').then( function (result) {
                self.socialLinks = result.data;
            });
        }]);

        // Projects
        develops.controller('projectController', ['$http', function ($http) {
            var self = this;
            self.projects = [];
            $http.get('/projects').then( function (result) {
                    self.projects = result.data;
            });
        }]);
    }
}

