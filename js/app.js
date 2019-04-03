'use strict';

// These variables are DOM Acess Variables.
var storesTable = document.getElementById('storesTable');
var newStoreForm = document.getElementById('newStoreForm');

// This array stores each of the time blocks.
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];

// This array stores the total cookies sold across all stores each hour. I'm not happy with how this is done currently, but it is functional. I think I could do this using an if statement inside of the cookiesFunction instead, but I'm going to wait to do that.
var totalPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// This array stores all of the store objects.
var allStores = [];

// This is the constructor function that makes each of the store objects.
function Store (storeId, storeLocation, minCustomers_pHour, maxCustomers_pHour, avgCookies_pSale) {

  this.storeId = storeId;
  this.storeLocation = storeLocation;
  this.minCustomers_pHour = minCustomers_pHour;
  this.maxCustomers_pHour = maxCustomers_pHour;
  this.avgCookies_pSale = avgCookies_pSale;
  this.cookiesArray = [];
  this.cookiesFunction();
  allStores.push(this); // Adds newly iterated store object to the array containing all store objects.
}

// This function returns  a random (non-integer) number between the given min and max customers per hour.
Store.prototype.randomCustomers = function() {
  return (Math.round(Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour));
};

// This function takes the random # of customers from above, multiplies by the avg. cookies per customer and rounds down, then fills an array for the whole day.
Store.prototype.cookiesFunction = function() {
  var locationTotal = 0;
  for (var i = 0 ; i < hoursArray.length - 1 ; i++) {
    var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
    this.cookiesArray.push(cookiesThisHour);
    locationTotal += cookiesThisHour;
    totalPerHour[i] += cookiesThisHour;
    totalPerHour[15] += cookiesThisHour;
  }
  this.cookiesArray.push(locationTotal);
};

// This function will render its store object as a row in a table.
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.storeLocation +':';
  trEl.appendChild(thEl);
  // This loop fills the row with amount of cookies sold each hour, with the Daily Total in the final element.
  for (var i = 0 ; i < hoursArray.length ; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];
    trEl.appendChild(tdEl);
  }
  storesTable.appendChild(trEl); // This line adds the finished row to the bottom of the table.
};

// These 5 statements ( :( ) name and initialize the 5 store objects, and add each one to the allStores array.
new Store ('store0', '1st and Pike', 23, 65, 6.3);
new Store ('store1', 'SeaTac Airport', 3, 24, 1.2);
new Store ('store2', 'Seattle Center', 11, 38, 3.7);
new Store ('store3', 'Capitol Hill', 20, 38, 2.3);
new Store ('store4', 'Alki', 2, 16, 4.6);


// This function is the event handler for the submission of a new store.
function handleNewStoreSubmit(event) {
  event.preventDefault();

  var storeId = 'store' + allStores.length;
  var storeLocation = event.target.storeLocation.value;
  var minCustomers_pHour = event.target.minCustomers_pHour.value;
  var maxCustomers_pHour = event.target.maxCustomers_pHour.value;
  var avgCookies_pSale = event.target.avgCookies_pSale.value;

  // This conditional ensures that only nonnegative values are entered for min, max, and avg.
  if (minCustomers_pHour < 0 || maxCustomers_pHour < 0 || avgCookies_pSale < 0) {
    alert('Please enter non-negative values for all fields!');

  } else {
    event.target.storeLocation.value = null; // Clears New Store form on webpage.
    event.target.minCustomers_pHour.value = null;
    event.target.maxCustomers_pHour.value = null;
    event.target.avgCookies_pSale.value = null;

    // This line creates an object for the new store.
    new Store(storeId, storeLocation, minCustomers_pHour, maxCustomers_pHour, avgCookies_pSale);

    storesTable.innerHTML = ''; // This line clears the old table.
    renderTable(); // This line rerenders the table.
  }
}

// This function is the event listener for Add New Store... form.
newStoreForm.addEventListener('submit', handleNewStoreSubmit);

// This function creates the heading of the table.
function tableHeading() {
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (var i = 0 ; i < hoursArray.length ; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursArray[i];
    trEl.appendChild(thEl);
  }
  theadEl.appendChild(trEl);
  storesTable.appendChild(theadEl);
}

// This function creates the footing of the table.
function tableFooting() {
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'All Stores:';
  trEl.appendChild(thEl);

  for (var i = 0 ; i < hoursArray.length ; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = totalPerHour[i];
    trEl.appendChild(tdEl);
  }
  tfootEl.appendChild(trEl);
  storesTable.appendChild(tfootEl);
}

// This function renders the heading, renders a row on the table for each store, and renders the footing.
function renderTable() {
  tableHeading();
  for (var i = 0 ; i < allStores.length ; i++) {
    allStores[i].render();
  }
  tableFooting();
}


// This line renders the entire table when the page is first loaded.
renderTable();
