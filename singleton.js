var officePrinter = (function () {
  var printerInstance;

  function create() {
    function print() {
      console.log("print in progress");
    }
    function turnOn() {
      console.log("on in progress");
    }
    return {
      print: print,
      turnOn: turnOn,
    };
  }

  return {
    getInstance: function () {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    },
  };
})();

var officePrinter1 = officePrinter.getInstance();

console.log(officePrinter1.print());
