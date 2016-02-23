/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

// UMD Module
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.bestPracticesAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    globals : function () {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function (flag) {
      var getValue;

      if (flag) {
        getValue = function () { return 'a'; }
      } else {
        getValue = function () { return 'b'; }
      }

      return getValue();
    },

    parseInt : function (num) {
      return parseInt(num, 10);
    },

    identity : function (val1, val2) {
      return val1 === val2;
    }
  };
}));