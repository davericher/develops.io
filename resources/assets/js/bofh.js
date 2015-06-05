/*global confirm, window, navigator, document,jQuery,localStorage,getRandomInt*/
/**
 * @file  Bastard Operator from hell quotes
 * @author Dave Richer <dave@ir0ny.com>
 */

// JSHint settings
/* jshint unused: false */

/**
 * @typedef {Object} jQuery
 * @namespace developsio
 */
var developsio = window.developsio || {};

/**
 * @namespace quotes
 * @memberof developsio
 */
developsio.quotes = (function($) {
	'use strict';
	var init = function () {
		this.excuses = [];
		this.loaded = false;

		if (localStorage !== undefined && localStorage.getItem('excuses') !== null && localStorage.getItem('excuses').length > 0) {
			this.excuses = localStorage.getItem('excuses');
			this.loaded = true;
		} else {
			$.get('assets/js/excuse.txt', function (data) {
				this.excuses = data.split('\r\n');
				this.loaded = true;
				if (localStorage !== undefined) {
					localStorage.setItem('excuses',this.excuses);
				}
			}, function () {
					this.loaded = false;
				}
			);
		}
	},
	extract = function () {
		var count = this.excuses.length,
			random = getRandomInt(0, count),
			excuse = this.excuses[random];
		return excuse.capFirst();
	},
	display = function () {
		if (this.loaded) {
		}
	};

	$(init());
}(jQuery));
