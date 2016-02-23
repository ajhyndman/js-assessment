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
    root.objectsAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    alterContext : function (fn, obj) {
      return fn.apply(obj);
    },

    alterObjects : function (constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function (obj) {
      var props = [], key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          props.push(key.toString() + ': ' + obj[key]);
        }
      }
      return props;
    }
  };
}));