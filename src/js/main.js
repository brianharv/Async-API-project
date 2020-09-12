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
  $("showOutput").text(`${response}`);
  
}
// UI Logic
$(document).ready(function() {
  $("#confirm").click(function() {
   // let amount = $("#userAmount").val();
    //let currency = $("#currency-select option:selected").val(); 
    clearFields();  
    ExchangeService.getCurrency()
      .then(function(response) {
        getElements(response); 
      });
  });
});