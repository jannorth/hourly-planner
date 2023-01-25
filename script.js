// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // save the user input in local storage
    var textValue = $(this).siblings(".description").val();
    // get the "hour-x" of the time-block containing clicked button (DOM traversal)
    var key = $(this).parent().attr("id");
    // save the description in local storage
    localStorage.setItem(key, textValue);
  });

  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // TODO: Add code to apply the past, present, or future class to each time
  // block
  $(document).ready(function () {
    // currentHour
    var currentHour = dayjs().format("HH");
    console.log(currentHour);

    $(".time-block").each(function () {
      // grab the id from the vantage point of .time-block
      var divId = $(this).attr("id");
      // value conditionally adds or removes past, present, future classes
      if (divId < currentHour) {
        $(this).addClass("past");
      } else if (divId == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });

  // TODO: Add code to display the current date in the header of the page.
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var currentDay = now.getFullYear() + "-" + month + "-" + day;

  console.log(currentDay);

  $("#currentDay").append(currentDay);
});
