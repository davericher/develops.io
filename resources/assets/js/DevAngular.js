import angular from 'angular';
import {socialLinks} from './socialLinks.js';
import {projects} from './projects.js';

export default class DevAngular {
    constructor() {
        "use strict";
        this.socialLinks = socialLinks;

        var develops = angular.module('develops', []);

        develops.controller('socialController', function () {
            this.links = socialLinks;
        });

        develops.controller('projectController', function () {
            this.projects = projects;
        });

        develops.directive('projectsSection', function () {
            return {
                restrict: 'EA',
                templateUrl: 'assets/js/partials/projectSection.html',
                controller: function () {
                    this.projects = projects;
                },
                controllerAs: 'projectCtrl'
            };
        });
    }
}

