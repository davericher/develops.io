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
        },
	    // Get BOFH excuses
	    getExcuse = function (data) {
		    var rows = data.split('\r\n'),
			    count = rows.length,
			    rand = getRandomInt(0, count),
			    excuse = rows[rand];
		    return excuse.capFirst();
	    },
	    excuse = function (first) {
		    var excuseDiv = $('#excuse');
		    $.get('/excuse.txt', function (data) {
			    if (!first) {
				    excuseDiv.fadeOut(1000, function () {
					    excuseDiv.text(getExcuse(data)).fadeIn(1000);
				    });
			    } else {
				    excuseDiv.text(getExcuse(data)).fadeIn(1000);
			    }
		    });
	    };

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
