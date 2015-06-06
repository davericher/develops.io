import $ from 'jquery';

export default class DevSite {
    constructor() {
        "use strict";
        $( () => {
            // Page load transitions
            $('body').hide().fadeIn(1000); // Fade in the page
            $("#soc").hide().fadeIn(2000); // Fade in the social bar
            // Build the switch handlers
            $('[id$=Switch]').each( (key,value) => {
                DevSite.flipSwitch(value);
            });
        });
    }

    static idFromVar(id) {
        "use strict";
        return $('#' + id);
    }

    static flipSwitch(element) {
        "use strict";
        $(element).find('h1').css('cursor', 'pointer');
        element.onclick = () => {
            var attached = DevSite.idFromVar($(element).data('attached'));
            attached.slideToggle('fast');
            $(element).find('h1 i').toggleClass('fa-chevron-up fa-chevron-down');
        }
    }
}