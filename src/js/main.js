import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import ExchangeService from './exchange.js';

function clearFields() {
  $("#userAmount").val(" ");
  $("#currency-select").val("sel");
}

function getElements(response) {
  let amount = $("#userAmount").val();
  if ($("#currency-select option:selected").text() === "1") {
    $("#currency-output").text(`The value of ${amount} in Australian Dollars is AUD ${response.conversion_rates.AUD}`);
    console.log(response.conversion_rates);
  } else {
    console.log(response.conversion_rates.AUD);
  }
}


$(document).ready(function() {
  $("#confirm").click(function() {
    let amount = $("#userAmount").val();
    clearFields();
    ExchangeService.getCurrency()
      .then(function(response) {
        getElements(response);
      });
  });
});