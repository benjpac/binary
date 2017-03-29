function convertBinary(decimal) {
  var binaryStr = "";
  var remainder = 0;
  while (decimal > 0) {
    remainder = decimal % 2;
    binaryStr = remainder.toString() + binaryStr;
    decimal = parseInt(decimal / 2);
  }
  alert(binaryStr)
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var numberInput = parseInt($("#number").val());
    convertBinary(numberInput)
    event.preventDefault();
  });
});
