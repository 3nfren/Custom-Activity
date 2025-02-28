'use strict';

requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'js',
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.3.1.min',
    postmonger: 'postmonger',
    customActivity: 'customActivity'
  },

});

requirejs(['jquery', 'customActivity', 'postmonger'], function ($, customActivity, postmonger) {
});

requirejs.onError = function (err) {
  if (err.requireType === 'timeout') {
    console.log('modules: ' + err.requireModules);
  }
  throw err;
};
