'use strict';

// Array to store each of the time blocks.
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

// This array will contain all of the store objects.
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


// These 5 statements ( :( ) initialize the 5 store objects, and add them each to the allStores array.
var store0 = new Store ('store0', '1st and Pike', 23, 65, 6.3);
var store1 = new Store ('store1', 'SeaTac Airport', 3, 24, 1.2);
var store2 = new Store ('store2', 'Seattle Center', 11, 38, 3.7);
var store3 = new Store ('store3', 'Capitol Hill', 20, 38, 2.3);
var store4 = new Store ('store4', 'Alki', 2, 16, 4.6);


allStores[0].cookiesFunction();
allStores[1].cookiesFunction();
allStores[2].cookiesFunction();
allStores[3].cookiesFunction();
allStores[4].cookiesFunction();



// This function will render the store object it's contained within as a row in a table.
Store.prototype.render = function() {

  var trEl = document.createElement('tr');


  for (var i = 0 ; i < hoursArray.length ; i++) {


    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];

    trEl.appendChild(tdEl);


  }

  document.getElementById('stores').appendChild(trEl);
};

allStores[0].render();
allStores[1].render();
allStores[2].render();
allStores[3].render();
allStores[4].render();





console.table(allStores);


console.log(store0);
console.log(store1);
console.log(store2);
console.log(store3);
console.log(store4);


