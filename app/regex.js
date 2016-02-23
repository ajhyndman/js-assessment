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
    root.regexAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    containsNumber : function (str) {
      return str;
    },

    containsRepeatingLetter : function (str) {
      return str;
    },

    endsWithVowel : function (str) {
      return str;
    },

    captureThreeNumbers : function (str) {
      return str;
    },

    matchesPattern : function (str) {
      return str;
    },

    isUSD : function (str) {
      return str;
    }
  };
}));