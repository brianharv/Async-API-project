import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import ExchangeService from './exchange.js';

function clearFields() {
  $("#reset").click(function() { 
    $("#userAmount").val(" ");
    $("#currency-select").val("0");
  })
}

function getElements(response) {
  let amount = $("#userAmount").val();
  if ($("#currency-select option:selected").val() == "1") {
    $("#currency-output").text(`The value of ${amount} USD in Australian Dollars is AUD ${amount * response.conversion_rates.AUD}`);
  } else if ($("#currency-select option:selected").val() == "2") {
    $("#currency-output").text(`The value of ${amount} USD in Bulgarian Lev is BGN ${amount * response.conversion_rates.BGN}`);
  } else if ($("#currency-select option:selected").val() == "3") {
    $("#currency-output").text(`The value of ${amount} USD in Canadian Dollars is CAD ${amount * response.conversion_rates.CAD}`);
  } else if ($("#currency-select option:selected").val() == "4") {
    $("#currency-output").text(`The value of ${amount} USD in Euros is EUR ${amount * response.conversion_rates.EUR}`);
  } else if ($("#currency-select option:selected").val() == "5") {
    $("#currency-output").text(`The value of ${amount} USD in Pounds Sterling is GBP ${amount * response.conversion_rates.GBP}`);
  } else if (amount == "0" || $("#currency-select option:selected").val() == "0") {
    $("#showError").text("Please enter a value above 0 and select a currency from the dropdown box");
  } else {
    $("#showError").text(`There was an error: ${response.message}`);
  }  
}


$(document).ready(function() {
  $("#confirm").click(function() {
    ExchangeService.getCurrency()
      .then(function(response) {
        getElements(response);
      }); 
    clearFields();  
  });
});