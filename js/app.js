// First I need to create an object for each store. 

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; // Array that stores each of the time blocks


var store1 = {
  storeLocation:'1st and Pike',
  minCustomers_pHour: 23,
  maxCustomers_pHour: 65,
  avgCookies_pSale: 6.3,


  randomCustomers: function() {
    return Math.random(this.minCustomers_pHour, (this.maxCustomers_pHour) + 1);

  }
};
