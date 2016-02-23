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
    root.functionsAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {
    argsAsArray : function (fn, arr) {
      return fn(arr);
    },

    speak : function (fn, obj) {
      return fn(obj);
    },

    functionFunction : function (str) {
      return str;
    },

    makeClosures : function (arr, fn) {
      return fn(arr);
    },

    partial : function (fn, str1, str2) {
      return fn(str1, str2);
    },

    useArguments : function () {
      return;
    },

    callIt : function (fn) {
      return fn();
    },

    partialUsingArguments : function (fn) {
      return fn();
    },

    curryIt : function (fn) {
      return fn();
    }
  };
}));