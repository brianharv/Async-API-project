import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

function clearFields() {
  $("#userAmount").val(" ");
  $("#currency-select").val("sel");
}

$(document).ready(function() {
  $("#confirm").click(function() {
    event.preventDefault();
    let amount = $("#userAmount").val();
    console.log(amount);
    clearFields();
  });
});