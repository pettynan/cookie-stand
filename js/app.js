'use strict';

// Array to store each of the time blocks.
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

function sumArray(sumArr) { // Function that sums an array.

  var total = 0;

  for (var i = 0 ; i < sumArr.length ; i++) {

    total += sumArr[i];
  }
  return total;
}

// Object for store 1
var store1 = {
  storeLocation:'1st and Pike',
  minCustomers_pHour: 23,
  maxCustomers_pHour: 65,
  avgCookies_pSale: 6.3,
  cookiesArray: [],

  // Function to return a random (non-integer) number between the given min and max customers per hour.
  randomCustomers: function() {
    return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
  },

  // Function that takes the random # of customers from above, multiplies by the avg. cookies per customer and rounds down, then fills an array for the whole day.
  cookiesFunction: function() {

    for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
    }
    this.cookiesArray.push(sumArray(this.cookiesArray));
    return this.cookiesArray;
  }
};

// Object for store 2
var store2 = {
  storeLocation:'SeaTac Airport',
  minCustomers_pHour: 3,
  maxCustomers_pHour: 24,
  avgCookies_pSale: 1.2,
  cookiesArray: [],

  randomCustomers: function() {
    return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
  },

  cookiesFunction: function() {

    for (var i = 0 ; i < hoursArray.length - 1; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
    }
    this.cookiesArray.push(sumArray(this.cookiesArray));
    return this.cookiesArray;
  }
};

// Object for store 3
var store3 = {
  storeLocation:'Seattle Center',
  minCustomers_pHour: 11,
  maxCustomers_pHour: 38,
  avgCookies_pSale: 3.7,
  cookiesArray: [],

  randomCustomers: function() {
    return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
  },

  cookiesFunction: function() {

    for (var i = 0 ; i < hoursArray.length - 1; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
    }
    this.cookiesArray.push(sumArray(this.cookiesArray));
    return this.cookiesArray;
  }
};

// Object for store 4
var store4 = {
  storeLocation:'Capitol Hill',
  minCustomers_pHour: 20,
  maxCustomers_pHour: 38,
  avgCookies_pSale: 2.3,
  cookiesArray: [],

  randomCustomers: function() {
    return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
  },

  cookiesFunction: function() {

    for (var i = 0 ; i < hoursArray.length - 1; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
    }
    this.cookiesArray.push(sumArray(this.cookiesArray));
    return this.cookiesArray;
  }
};

// Object for store 5
var store5 = {
  storeLocation:'Alki',
  minCustomers_pHour: 2,
  maxCustomers_pHour: 16,
  avgCookies_pSale: 4.6,
  cookiesArray: [],

  randomCustomers: function() {
    return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
  },

  cookiesFunction: function() {

    for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
    }
    this.cookiesArray.push(sumArray(this.cookiesArray));
    return this.cookiesArray;
  }
};

// Here, I actually run each store function to propagate the arrays.
store1.cookiesFunction();
store2.cookiesFunction();
store3.cookiesFunction();
store4.cookiesFunction();
store5.cookiesFunction();

// These variables are used to reference the id tags on the sales.html document where I want the lists to appear
var ulEl1 = document.getElementById('store1');
var ulEl2 = document.getElementById('store2');
var ulEl3 = document.getElementById('store3');
var ulEl4 = document.getElementById('store4');
var ulEl5 = document.getElementById('store5');

// This for loop takes the array of hours and each store's array of cookie sales each hour, and inserts them into the sales.html document.
for (var i = 0 ; i < hoursArray.length ; i++) {

  var liEl1 = document.createElement('li');
  var liEl2 = document.createElement('li');
  var liEl3 = document.createElement('li'); // If only there were a way to construct all of these at once !!
  var liEl4 = document.createElement('li');
  var liEl5 = document.createElement('li');

  liEl1.textContent = hoursArray[i] + ': ' + store1.cookiesArray[i] + ' cookies';
  liEl2.textContent = hoursArray[i] + ': ' + store2.cookiesArray[i] + ' cookies';
  liEl3.textContent = hoursArray[i] + ': ' + store3.cookiesArray[i] + ' cookies';
  liEl4.textContent = hoursArray[i] + ': ' + store4.cookiesArray[i] + ' cookies';
  liEl5.textContent = hoursArray[i] + ': ' + store5.cookiesArray[i] + ' cookies';

  ulEl1.appendChild(liEl1);
  ulEl2.appendChild(liEl2);
  ulEl3.appendChild(liEl3);
  ulEl4.appendChild(liEl4);
  ulEl5.appendChild(liEl5);
}
