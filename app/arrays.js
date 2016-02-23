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
    root.arraysAnswers = factory();
  }
}(this, function () {
  'use strict';

  return {

    indexOf : function (arr, item) {
      return arr.indexOf(item);
    },

    sum : function (arr) {
      return arr.reduce(function (a, b) { return a + b; });
    },

    remove : function (arr, item) {
      return arr.filter(function (a) { return a !== item; });
    },

    removeWithoutCopy : function (arr, item) {
      var index = arr.indexOf(item);
      while (index !== -1) {
        arr.splice(index, 1);
        index = arr.indexOf(item);
      }
      return arr;
    },

    append : function (arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function (arr) {
      arr.pop();
      return arr;
    },

    prepend : function (arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function (arr) {
      arr.shift();
      return arr;
    },

    concat : function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function (arr, item) {
      var count = 0;
      arr.forEach(function (curr) {
        if (curr === item) { count += 1; }
      });
      return count;
    },

    duplicates : function (arr) {
      // array to store duplicates
      var duplicates = [], front, prev;

      arr.sort();

      // collect duplicate values
      front = arr.shift();
      while (front !== undefined) {
        prev = front;
        front = arr.shift();
        // since the array is sorted, any duplicates will be consecutive
        if (front === prev && !duplicates.includes(front)) {
          duplicates.push(front);
        }
      }

      return duplicates;
    },

    square : function (arr) {
      return arr.map(function (x) { return Math.pow(x, 2); });
    },

    findAllOccurrences : function (arr, target) {
      var indices = [],
          index = arr.indexOf(target);
      while (index !== -1) {
        indices.push(index);
        index = arr.indexOf(target, index + 1);
      }

      return indices;
    }
  };
}));
