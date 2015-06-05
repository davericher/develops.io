/*global angular */
(function () {
	'use strict';
	var socialLinks = [
			{
				href: "http://www.facebook.com/davericher",
				btnStyle: "btn-facebook",
				faStyle: "fa-facebook",
				desc: "Facebook"
			},
			{
				href: "https://twitter.com/DavidJRicher",
				btnStyle: "btn-twitter",
				faStyle: "fa-twitter",
				desc: "Twitter"
			},
			{
				href: "https://plus.google.com/u/1/+DaveRicher705/",
				btnStyle: "btn-google-plus",
				faStyle: "fa-google-plus",
				desc: "Google Plus"
			},
			{
				href: "https://github.com/ir0ny1",
				btnStyle: "btn-github",
				faStyle: "fa-github",
				desc: "GitHub"
			},
			{
				href: "mailto:dave@ir0ny.com",
				btnStyle: "btn-microsoft",
				faStyle: "fa-windows",
				desc: "Email"
			},
			{
				href: "https://www.linkedin.com/profile/view?id=356450822",
				btnStyle: "btn-linkedin",
				faStyle: "fa-linkedin",
				desc: "LinkedIn"
			}
		],
		projects = [
			{
				title: 'C# Console Framework',
				faIcon: "fa-code",
				href: "https://github.com/ir0ny1/ExtendedConsole",
				desc: "A very convenient way to handle the mundane aspects of console programming. Internal write buffer with character by character color support."
			}
		],
		contentPanels = [
			{
				title: 'Utilities Used',
				items: [
					'Twitter Bootstrap',
					'FontAwesome',
					'Gulp / Elixir',
					'Bower'
				],
				faIcon: 'fa-cogs'
			}
		],
		develops = angular.module('develops', []);

	develops.controller('socialController', function () {
		this.links = socialLinks;
	});

	develops.controller('projectController', function () {
		this.projects = projects;
	});

	develops.directive('contentPanel', function () {
		return {
			restrict: 'EA',
			templateUrl: 'assets/js/partials/contentPanel.html',
			controller: function () {
				this.panels = contentPanels;
			},
			controllerAs: 'panelsCtrl'
		};
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
}());
