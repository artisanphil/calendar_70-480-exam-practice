window.addEventListener("load", function() {
  loadCalendar();
});

function loadCalendar() {

  var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();

  var this_month = new Date(year, month, 1);
  var next_month = new Date(year, month + 1, 1);

  var first_week_day = this_month.getDay();

  //this will be used to count how many boxes remain to be added at the end of the calendar
  var countDays = 1;

  var monthyear = document.getElementById("monthyear");
  monthyear.innerHTML = monthNames[month] + " " + year;

  var dayGrid = document.getElementById("daygrid");

  //first, we add the boxes from last month
  for(week_day = 0; week_day < first_week_day; week_day++) {
    countDays++;
    var liDay = document.createElement("li");
    liDay.innerHTML = "";
    dayGrid.appendChild(liDay);
  }

  //got this code from http://www.javascriptsource.com/time-date/simple-calendar.html, don't really understand it
  //somehow calculates how many days there are in a month (e.g. 31)
  var days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));

  for(day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
    countDays++;
    var liDay = document.createElement("li");
    liDay.innerHTML = day_counter;
    dayGrid.appendChild(liDay);
  }

  //this adds the boxes for the empty spaces remaining in the grid for the end of the month.
  //we get the 42 from the 42 boxes in the grid (7 days per week * 6 weeks)
  //maybe for month where lastDays is smaller or equal 35, we could just display 5 rows instead of 6
  for(lastDays = countDays; lastDays <= 42; lastDays++)
  {
    var liDay = document.createElement("li");
    liDay.innerHTML = "";
    dayGrid.appendChild(liDay);
  }

}
