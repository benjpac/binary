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

function convertDecimal(binary) {
  debugger;
  var binaryArray = binary.toString().split("");
  var checkNumLength = binary.toString().length;
  var decimalArray = [256, 128, 64, 32, 16, 8, 4, 2, 1];
  var splicedDecimalArray = decimalArray.slice(checkNumLength);
  var decimal = 0;
  for (var i = 0; i < checkNumLength; i++) {
    if (binary[i] === "1") {
      decimal += splicedDecimalArray[i];
    }
  }
  alert(decimal)
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var numberInput = parseInt($("#number").val());
    var numberInput1 = $("#number1").val();
    convertBinary(numberInput);
    convertDecimal(numberInput1)
    event.preventDefault();
  });
});
