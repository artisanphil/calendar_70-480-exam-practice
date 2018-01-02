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
  monthyear.innerHTML = monthNames[month] + " " + year; //this part of the code must be added upon when prev and next buttons are added

  var dayGrid = document.getElementById("daygrid");

  //first, we add the boxes from last month
  for(week_day = 0; week_day < first_week_day; week_day++) {
    countDays++;
    var liDay = document.createElement("li");
    liDay.innerHTML = "";
    dayGrid.appendChild(liDay);
  }

  //got this code from http://www.javascriptsource.com/time-date/simple-calendar.html


  var days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));
    //(1000 * 60 * 60 * 24) => 1000 is 1000 milliseconds.60 is 60 seconds.Next 60 is 60 minutes.24 is 24 hours.
  //.getTime() is a little tricky.It calculates the amount of time it has been since January 1 1970.


  //Using .getMonth() earlier we got the name of the current month.Using  .getFullYear() earlier we got our current exact year.
  //Now,look what we assigned earlier to the variable this_month.We indirectly used the values from .getMonth() and .getFullYear().
  //About next_month,after getting current month we added 1,to get next month.

  //Now take that in.
  //Why do we need to subtract next_month.getTime() and this_month.getTime()?
  //Remove the following code from comments and execute,then look up in the debugger:

  //console.log( Math.round(next_month.getTime() - this_month.getTime()));
  //console.log(Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24)));


  //The value .getTime() gives is in milliseconds.So the subtraction will also be in milliseconds.The division is to turn it into days,and Math.round() is to take care of decimals
  //Well we can just do this_month.getTime()/(1000 * 60 * 60 *24).Why dont we do that instead.Try the following commented code.

 // console.log(Math.round((this_month.getTime()) / (1000 * 60 * 60 * 24)));
  //The value is 17532 days.It has been 17532 days since January 1 1970 upto Jan 2 2018.
  //We subtracted with the next month,well you can try with the prev month too,but make sure while testing you have 2017 has the year for last month.
  
  //console.log(Math.round((next_month.getTime()) / (1000 * 60 * 60 * 24)));
  //The value is 17563.Subtraction between two adjacent months gives the number of days of the current month after the division.

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
