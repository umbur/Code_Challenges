// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example,
// if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Examples:
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

function monthName(num) {
  switch (num) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      return;
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      return `The input is wrong!`;
  }
}
console.log(monthName(3));
