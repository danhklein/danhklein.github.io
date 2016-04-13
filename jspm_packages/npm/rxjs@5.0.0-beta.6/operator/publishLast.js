/* */ 
"use strict";
var AsyncSubject_1 = require('../AsyncSubject');
var multicast_1 = require('./multicast');
function publishLast() {
  return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
}
exports.publishLast = publishLast;
