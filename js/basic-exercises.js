/** Example that displays the current time **/
function dateOfWeek(dayOfWeek) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var res = dayOfWeek.getDay();
  return days[res];
}

function getHours(day) {
  var hour = day.getHours();
  return (hour > 12) ? (hour - 12) + " PM : " :  hour + " AM : ";
}

function displayDateTime() {
  var d = new Date();
  var dateFormat = "Today is: " + dateOfWeek(d) + ".";
  
  dateFormat += "Current time is: " + getHours(d) + d.getMinutes() + " : " + d.getSeconds();
  
}

displayDateTime();