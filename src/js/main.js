import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import ExchangeService from './exchange.js';

function clearFields() {
  $("#userAmount").val(" ");
  $("#currency-select").val("0");
}

function getElements(response) {
  let amount = $("#userAmount").val();
  //if ($("#currency-select option:selected").val() === 1) {
    $("#currency-output").text(`The value of ${amount} in Australian Dollars is AUD ${amount * response.conversion_rates.AUD}`);
    
  //} else {
    console.log(`${response.conversion_rates.AUD}`);
    console.log(`${amount}`);
 // }
}


$(document).ready(function() {
  $("#input-amount").submit(function(event) {
    event.preventDefault();
    let amount = $("#userAmount").val();
    ExchangeService.getCurrency(amount)
      .then(function(response) {
        getElements(response);   
      });
    clearFields();  
  });
});