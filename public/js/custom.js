/*global confirm, window, navigator, document*/
/**
 * @file  Base JavaScript needed independent of the project
 * @author Dave Richer <dave@ir0ny.com>
 */

// JSHint settings
/* jshint unused: false */

/**
 * The jQuery object or a jQuery set containing on or more DOM elements.
 * @typedef {Object} jQuery
 */

/**
 * Namespace of the app.
 * This should be only variable the app should store in the global scope.
 * @namespace developsio
 */
var developsio = window.developsio || {};

/**
 * Namespace of the base module. Contains JavaScript needed independent of the
 * project or other modules.
 * @namespace base
 * @memberof developsio
 */
developsio.base = (function() {
	'use strict';

	/**
	 * Fix viewport issues with IE 10.
	 * @see {@link http://getbootstrap.com/getting-started/#support-ie10-width}
	 * @memberof developsio.base
	 * @private
	 */
	var _fixViewportIssues = (function() {
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement('style');
			msViewportStyle.appendChild(
				document.createTextNode(
					'@-ms-viewport{width:auto!important}'
				)
			);
			document.querySelector('head').appendChild(msViewportStyle);
		}
	}());

	/**
	 * Avoid `console` errors in browsers that lack a console.
	 * @see {@link https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js}
	 * @memberof developsio.base
	 * @private
	 */
	var _addConsoleMethods = (function() {
		var method;
		var noop = function() {};
		var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
			method = methods[length];

			// Only stub undefined methods.
			if (!console[method]) {
				console[method] = noop;
			}
		}
	}());

}());

function getRandomInt(min, max) {
	'use strict';
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.capFirst = function() {
	'use strict';
	return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * @file An example module extending the the functionality of Bootstraps »Foo«
 * module or an own module which has nothing to do with Bootstraps JavaScript
 * code.
 * @author Dave Richer <dave@ir0ny.com>
 */

/*global $, jQuery, getRandomInt, window, setInterval*/

/**
 * Make sure our global object is available.
 * @namespace developsio
 * @ignore
 */
var developsio = window.developsio || {};


developsio.Site = (function ($) {
    'use strict';

    var idFromVar = function (id) {
            return $('#' + id);
        },
	    // Handle Switches
        toggelSwtich = function (self) {
            $(self).find('h1').css('cursor', 'pointer');
            self.onclick = function () {
                var attached = idFromVar($(self).data('attached'));
                attached.slideToggle('fast');
                $(self).find('h1 i').toggleClass('fa-chevron-up fa-chevron-down');
            };
        }

    /**
     * Executed on DOM ready within the scope of this module.
     * @event
     */
    $(function () {
        // Page load transitions
        $('body').hide().fadeIn(1000); // Fade in the page
        $("#soc").hide().fadeIn(2000); // Fade in the social bar

        // Build the switch handlers
        $('[id$=Switch]').each(function () {
            toggelSwtich(this);
        });

	    //excuse(true);
	    //setInterval( function () {
		 //   excuse(false);
	    //},10000);

    });

    // Return functions to make them accessible from outside.
    return {};

}(jQuery));


/**
 * Executed on DOM ready within the global scope.
 * @event
 */
$(function () {
    'use strict';
	return;
});

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
		develops = angular.module('develops', []);

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
}());

//# sourceMappingURL=custom.js.map