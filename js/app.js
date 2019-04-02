'use strict';

// Array to store each of the time blocks.
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];

// Array to store all of the store objects.
var allStores = [];

// This is the constructor function that makes each of the store objects.
function Store (storeId, storeLocation, minCustomers_pHour, maxCustomers_pHour, avgCookies_pSale) {
  this.storeId = storeId;
  this.storeLocation = storeLocation;
  this.minCustomers_pHour = minCustomers_pHour;
  this.maxCustomers_pHour = maxCustomers_pHour;
  this.avgCookies_pSale = avgCookies_pSale;
  this.cookiesArray = [];

  // Function to return a random (non-integer) number between the given min and max customers per hour.
  this.randomCustomers = function() {
    return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
  };

  // Function that takes the random # of customers from above, multiplies by the avg. cookies per customer and rounds down, then fills an array for the whole day.
  this.cookiesFunction = function() {
    var total = 0;
    for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
      total += cookiesThisHour;
    }
    this.cookiesArray.push(total);
    return this.cookiesArray;
  };

  // Adds newly iterated store object to the array containing all store objects.
  allStores.push(this);
}


// These 5 statements ( :( ) name and initialize the 5 store objects, and add each one to the allStores array.
var store0 = new Store ('store0', '1st and Pike', 23, 65, 6.3);
var store1 = new Store ('store1', 'SeaTac Airport', 3, 24, 1.2);
var store2 = new Store ('store2', 'Seattle Center', 11, 38, 3.7);
var store3 = new Store ('store3', 'Capitol Hill', 20, 38, 2.3);
var store4 = new Store ('store4', 'Alki', 2, 16, 4.6);

// This function will render the store object it's contained within as a row in a table.
Store.prototype.render = function() {

  var trEl = document.createElement('tr');

  // This code creates the heading of the row: the store location.
  var thEl = document.createElement('th');
  thEl.textContent = this.storeLocation +':';
  trEl.appendChild(thEl);

  // This loop fills the row with amount of cookies sold each hour, with the Daily Total in the final element.
  for (var i = 0 ; i < hoursArray.length ; i++) {

    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];
    trEl.appendChild(tdEl);
  }

  document.getElementById('stores').appendChild(trEl); // This line adds the finished row to the bottom of the table.
};

// This function creates the heading of the table.
function tableHeading() {

  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');

  trEl.appendChild(thEl);

  for (var i = 0 ; i < hoursArray.length ; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursArray[i];
    trEl.appendChild(thEl);

  }

  document.getElementById('stores').appendChild(trEl);
}


// This line runs function to create the heading row.
tableHeading();

// This for loop runs the functions to calculate the amount of cookies sold per hour for a store then renders that data in a row on the table, for each store.
for (var i = 0 ; i < allStores.length ; i++) {
  allStores[i].cookiesFunction();
  allStores[i].render();
}

console.table(allStores);
console.log(store0);
console.log(store1);
console.log(store2);
console.log(store3);
console.log(store4);
