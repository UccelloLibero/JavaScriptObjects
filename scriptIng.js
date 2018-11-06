/*
  Create a script that will hold bunch of records (any type of info)
  1. Create a data structure to hold information about e.g. group of something:
   create an array; the array will hold a list of objects;
   each object will represent single group and 4 properties containing 2 string values and 2 number values
  2. Create min of 5 objects
  3. Print it to the page: access each record, print out each property and its values
  4. Create a loop: loop through each element of the array and build up a message that contains all of the records then print it out to the page
*/

var message = '';
var mountain;
var search;

// create print to page function
function print(message) {
  document.write(message);
  // browser behavior change won't allow this code to work so document.write() will print the message after the loop break || but in general the code bellow is better option
  //  var div = document.getElementById('output');
  //  div.innerHTML = message;
}


// create a function passing the data stored in the array to, return a string formated for web-display
function getMountainInfo(mountain) {
  var mountInfo = '<h2>Mountain: ' + mountain.name + '</h2>';
  mountInfo += '<p>Class: ' + mountain.class + '</p>';
  mountInfo += '<p>Trail lenght: ' + mountain.miles + '</p>';
  mountInfo += '<p>Elevation of the mountain: ' + mountain.elevation + '</p>';
  return mountInfo;
}


// create a loop to enable searching of the data stored in arrays
while (true) {
  search = prompt('Look up some useful information about few of our favorite mountains by typing the name of the mountain [Everest]. (Type "quit" to end your search.)');
  if (search === null || search.toLowerCase() === 'quit') {
    break
  }
  // for loop to loop through array of objects and print all elements as they belong
  for (var i = 0; i < mountains.length; i += 1) {
    mountain = mountains[i];
    if (mountain.name === search) {
      message = getMountainInfo(mountain);
      print(message);
    }
  }
}

print(message);
