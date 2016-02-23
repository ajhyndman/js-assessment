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
    root.logicalOperatorsAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    or : function (a, b) {
      return a || b;
    },

    and : function (a, b) {
      return a && b;
    }
  };
}));