const spreadsheet = document.getElementById("spreadsheet");
spreadsheet.addEventListener("click", function(event) {
  let target = event.target;
  let value = target.innerHTML;
  target.innerHTML = "<input type='text' value='" + value + "'>";
});
