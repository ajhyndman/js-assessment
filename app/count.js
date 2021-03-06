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
    root.countAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    count : function (start, end) {
      var go, i, timer;
      i = start;

      go = function () {
        if (i <= end) {
          console.log(i);
          i += 1;
          timer = setTimeout(go, 100);
        }
      };

      go(start);

      return {
        cancel: function () {
          clearTimeout(timer);
        }
      };
    }
  };
}));
