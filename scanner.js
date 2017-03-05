angular.module('scannerApp', [])
  .controller('ScannerController', function($scope) {
    var scanner = $scope;
    scanner.count = 0;
    scanner.wrongCount = 0;
    scanner.code = '';
    scanner.wrongText = '';
    scanner.reset = function() {
      scanner.scanText = '';
      scanner.code = '';
      scanner.wrongText = '';
      scanner.count = 0;
      scanner.wrongCount = 0;
     window.document.getElementById('scanText').focus();
    }
    scanner.scanCode = function() {
      if (scanner.code == ''){
        scanner.code = scanner.scanText;
      } else {
        if (scanner.code == scanner.scanText) {
          scanner.count ++;
          scanner.scanText = '';
          scanner.wrongText = '';
        } else {
          scanner.wrongText = 'Wrong!!';
          scanner.wrongCount ++;
        }
      }
      window.document.getElementById('scanText').focus();
      scanner.scanText = '';
    };
  });


setTimeout(function() {
    window.document.getElementById('scanText').focus();    
}, 0);
