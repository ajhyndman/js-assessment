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
    root.stringsAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    reduceString: function (str, amount) {
      return str + amount;
    },
    wordWrap: function (str, cols) {
      return str + cols;
    },
    reverseString: function (str) {
      return str;
    }
  };
}));