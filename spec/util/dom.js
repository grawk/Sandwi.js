/**
* dom.js - convenience methods for unit testing
* 
* @author Matt Edelman <medelman@paypal.com> 
*/
define(["jquery"], function($) {

     "use strict";


     var DOMUtility = function() {

     };


     DOMUtility.prototype = {
          $harnessContainer: null,
          /**
          * construct a form from name value pairs
          * @param config JSON object with name value pairs representing attributes/values
          */
          setForm: function(config) {
               var formString = '<form action="actionURL">';
               for (var elt = 0; elt < config.elts.length; elt++) {
                    formString += '<input ';
                    for (var attr = 0; attr < config.elts[elt].attrs.length; attr++) {
                         formString += config.elts[elt].attrs[attr].name + '="' + config.elts[elt].attrs[attr].value + '" ';
                    }
                    formString += '/>';
               }
               formString += '</form>';
               console.log(formString);
               this.$harnessContainer.html(formString);
          },
          /**
          * set the jquery object where we should put all harness HTML
          * @param $elem jQuery object reference
          */
          setHarnessContainer: function($elem) {
               this.$harnessContainer = $elem;
          },
          /**
          * populate the harness element with HTML
          * @param html string to add into harness
          */
          setHarness: function(html) {
               this.$harnessContainer.html(html);
          },
          /**
          * remove html from harness element
          */
          cleanHarness: function() {
               this.$harnessContainer.html("");
          }
     }

     return new DOMUtility();

});