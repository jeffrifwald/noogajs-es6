System.register("../src/arrow", [], function() {
  "use strict";
  var __moduleName = "../src/arrow";
  var pi = (function() {
    return 3.1415;
  });
  var sqr = (function(a) {
    return a * a;
  });
  var mult = (function(a, b) {
    return a * b;
  });
  console.log('pi =', pi());
  console.log('4^2 =', sqr(4));
  console.log('3 * 2 = ', mult(3, 2));
  return {};
});
System.get("../src/arrow" + '');
System.register("../src/rest", [], function() {
  "use strict";
  var __moduleName = "../src/rest";
  function sum() {
    for (var args = [],
        $__0 = 0; $__0 < arguments.length; $__0++)
      $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
    return args.reduce((function(a, b) {
      return a + b;
    }));
  }
  console.log('1 + 2 + 3 + 4 = ', sum(1, 2, 3, 4));
  return {};
});
System.get("../src/rest" + '');
