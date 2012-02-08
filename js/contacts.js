/*
 * @file        contacts.js
 * @author      Marcus Willis
 * @description Contact List Widget functions
 * @requires    jQuery
 */

/*global jQuery */

var SiteName = {};

SiteName.contactList = (function ($) {
    var attachToggle,
        toggleInfo,
        widgetClass = 'contacts-widget';

    attachToggle = function (selector) {
        var toggler = $(selector);

        toggler.change(function () {
            $('select option:selected').each(function () {
                toggleInfo(this.value);
            });
        });
    };

    toggleInfo = function (info) {
        var togglePrefix = 'show-',
            widgetBlock = $('.' + widgetClass);

        widgetBlock.removeClass().addClass(widgetClass).addClass(togglePrefix + info);
    };

    return {
        /*
         * @method      init
         * @description Calls appropriate methods on page load
         * @public
         */
        init : function () {
            toggleInfo('email');
            attachToggle('.' + widgetClass + ' > footer > select');
        }
    };
}(jQuery));

jQuery(function () {
    SiteName.contactList.init();
});
