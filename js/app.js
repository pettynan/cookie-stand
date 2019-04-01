// First I need to create an object for each store.

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; // Array that stores each of the time blocks


// function randomCustomers() {
//   return Math.floor(Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);
// }




var store1 = {
  storeLocation:'1st and Pike',
  minCustomers_pHour: 23,
  maxCustomers_pHour: 65,
  avgCookies_pSale: 6.3,
  cookiesArray: [],

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustomers_pHour - this.minCustomers_pHour) + this.minCustomers_pHour);

  },



  cookiesFunction: function() {

    for (var i = 0 ; i < hoursArray.length ; i++) {
      var cookiesThisHour = Math.floor((this.randomCustomers() * this.avgCookies_pSale));
      this.cookiesArray.push(cookiesThisHour);
      console.log(this.randomCustomers());
    }
    console.log('test');
    return this.cookiesArray;
  }

};
store1.cookiesFunction();
console.log(store1.cookiesArray);
console.log(hoursArray.length);


// Going to try and create a for loop to actually populate the list on the webpage


var ulEl1 = document.getElementById('store1');


for (var i = 0 ; i < hoursArray.length ; i++) {

  var liEl = document.createElement('li');

  liEl.textContent = hoursArray[i] + ': ' + store1.cookiesArray[i];

  ulEl1.appendChild(liEl);
}
