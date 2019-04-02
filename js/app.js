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


// These are the arrays used to initialize the store objects.
var storeIdArray = ['store0', 'store1', 'store2', 'store3', 'store4'];
var storeLocationArray = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCustomers_pHourArray = [23, 3, 11, 20, 2];
var maxCustomers_pHourArray = [65, 24, 38, 38, 16];
var avgCookies_pSaleArray = [6.3, 1.2, 3.7, 2.3, 4.6];
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
    for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
    }
    this.cookiesArray.push(sumArray(this.cookiesArray));
    return this.cookiesArray;
  };

  // Adds newly iterated store object to the array containing all store objects.
  allStores.push(this);
}


//This for loop initializes each of the objects.
for (var i = 0 ; i < storeIdArray.length ; i++) {
  new Store (storeIdArray[i], storeLocationArray[i], minCustomers_pHourArray[i], maxCustomers_pHourArray[i], avgCookies_pSaleArray[i]);
}




// // Object for store 0
// var store0 = {
//   storeLocation:'1st and Pike',
//   minCustomers_pHour: 23,
//   maxCustomers_pHour: 65,
//   avgCookies_pSale: 6.3,
//   cookiesArray: [],

//   // Function to return a random (non-integer) number between the given min and max customers per hour.
//   randomCustomers: function() {
//     return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
//   },

//   // Function that takes the random # of customers from above, multiplies by the avg. cookies per customer and rounds down, then fills an array for the whole day.
//   cookiesFunction: function() {

//     for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
//       var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
//       this.cookiesArray.push(cookiesThisHour);
//     }
//     this.cookiesArray.push(sumArray(this.cookiesArray));
//     return this.cookiesArray;
//   }
// };

// // Object for store 1
// var store1 = {
//   storeLocation:'SeaTac Airport',
//   minCustomers_pHour: 3,
//   maxCustomers_pHour: 24,
//   avgCookies_pSale: 1.2,
//   cookiesArray: [],

//   randomCustomers: function() {
//     return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
//   },

//   cookiesFunction: function() {

//     for (var i = 0 ; i < hoursArray.length - 1; i++) {
//       var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
//       this.cookiesArray.push(cookiesThisHour);
//     }
//     this.cookiesArray.push(sumArray(this.cookiesArray));
//     return this.cookiesArray;
//   }
// };

// // Object for store 2
// var store2 = {
//   storeLocation:'Seattle Center',
//   minCustomers_pHour: 11,
//   maxCustomers_pHour: 38,
//   avgCookies_pSale: 3.7,
//   cookiesArray: [],

//   randomCustomers: function() {
//     return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
//   },

//   cookiesFunction: function() {

//     for (var i = 0 ; i < hoursArray.length - 1; i++) {
//       var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
//       this.cookiesArray.push(cookiesThisHour);
//     }
//     this.cookiesArray.push(sumArray(this.cookiesArray));
//     return this.cookiesArray;
//   }
// };

// // Object for store 3
// var store3 = {
//   storeLocation:'Capitol Hill',
//   minCustomers_pHour: 20,
//   maxCustomers_pHour: 38,
//   avgCookies_pSale: 2.3,
//   cookiesArray: [],

//   randomCustomers: function() {
//     return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
//   },

//   cookiesFunction: function() {

//     for (var i = 0 ; i < hoursArray.length - 1; i++) {
//       var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
//       this.cookiesArray.push(cookiesThisHour);
//     }
//     this.cookiesArray.push(sumArray(this.cookiesArray));
//     return this.cookiesArray;
//   }
// };

// // Object for store 4
// var store4 = {
//   storeLocation:'Alki',
//   minCustomers_pHour: 2,
//   maxCustomers_pHour: 16,
//   avgCookies_pSale: 4.6,
//   cookiesArray: [],

//   randomCustomers: function() {
//     return (Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
//   },

//   cookiesFunction: function() {

//     for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
//       var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
//       this.cookiesArray.push(cookiesThisHour);
//     }
//     this.cookiesArray.push(sumArray(this.cookiesArray));
//     return this.cookiesArray;
//   }
// };

// // Here, I actually run each store function to propagate the arrays.
// store0.cookiesFunction();
// store1.cookiesFunction();
// store2.cookiesFunction();
// store3.cookiesFunction();
// store4.cookiesFunction();

// Here, I run run the cookiesFunction on each store.

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





// // MAKE BELOW INTO RENDER FUNCTION

// function render(storeId) {
//   var ulEl = document.getElementById(storeId);

//   for (var i = 0 ; i < hoursArray.length ; i++) {

//     var liEl = document.createElement('li');

//     liEl.textContent = `${hoursArray[i]}: ${storeId.cookiesArray[i]} cookies`;

//     ulEl.appendChild(liEl);

//   }

// }

// for (i = 0 ; i < storeIdArray.length ; i++) {

//   render(allStores[i]);

// }

console.table(allStores);







// var ulEl1 = document.getElementById('store0');
// var ulEl2 = document.getElementById('store1');
// var ulEl3 = document.getElementById('store2');
// var ulEl4 = document.getElementById('store3');
// var ulEl5 = document.getElementById('store4');

// // This for loop takes the array of hours and each store's array of cookie sales each hour, and inserts them into the sales.html document.
// for (i = 0 ; i < hoursArray.length ; i++) {

//   // I WANT to create another for loop inside this for loop to run the same process 5 times (where 5 is the number of stores)


//   var liEl1 = document.createElement('li');
//   var liEl2 = document.createElement('li');
//   var liEl3 = document.createElement('li'); // If only there were a way to construct all of these at once !!
//   var liEl4 = document.createElement('li');
//   var liEl5 = document.createElement('li');

//   liEl1.textContent = `${hoursArray[i]}: ${store0.cookiesArray[i]} cookies`;
//   liEl2.textContent = `${hoursArray[i]}: ${store1.cookiesArray[i]} cookies`;
//   liEl3.textContent = `${hoursArray[i]}: ${store2.cookiesArray[i]} cookies`;
//   liEl4.textContent = `${hoursArray[i]}: ${store3.cookiesArray[i]} cookies`;
//   liEl5.textContent = `${hoursArray[i]}: ${store4.cookiesArray[i]} cookies`;

//   ulEl1.appendChild(liEl1);
//   ulEl2.appendChild(liEl2);
//   ulEl3.appendChild(liEl3);
//   ulEl4.appendChild(liEl4);
//   ulEl5.appendChild(liEl5);
// }
