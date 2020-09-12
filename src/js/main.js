import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { ExchangeService } from './exchange.js';

function clearFields() {
  $("#userAmount").val(" ");
  $("#currency-select").val("sel");
}

function getElements(response) {
  if ($("#currency-select").val() === "aud") {
    $("#form-output").text(`The value of ${amount} in Australian Dollars is AUD ${amount * response.conversion_rates[3]}`);
  } 
}


$(document).ready(function() {
  $("#confirm").onclick(function() {
    let amount = $("#userAmount").val();
    console.log(amount);
    clearFields();
    ExchangeService.getCurrency(amount)
      .then(function(response) {
        getElements(response);
      });
  });
});