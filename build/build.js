System.register("../src/arrow", [], function() {
  "use strict";
  var __moduleName = "../src/arrow";
  var PI = (function() {
    return 3.1415;
  });
  var sqr = (function(a) {
    return a * a;
  });
  var mult = (function(a, b) {
    return a * b;
  });
  console.log('PI =', pi());
  console.log('4^2 =', sqr(4));
  console.log('3 * 2 = ', mult(3, 2));
  return {};
});
System.get("../src/arrow" + '');
