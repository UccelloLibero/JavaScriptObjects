/*
  Create a script that will hold bunch of records (any type of info)
  1. Create a data structure to hold information about e.g. group of something:
   create an array; the array will hold a list of objects;
   each object will represent single group and 4 properties containing 2 string values and 2 number values
  2. Create min of 5 objects
  3. Print it to the page: access each record, print out each property and its values
  4. Create a loop: loop through each element of the array and build up a message that contains all of the records then print it out to the page
*/

// object literal with 5 objects and 4 properties each
var mountains = [
  {name: 'Mt Elbert', class: 'Two', miles: 14, elevation: 14439},
  {name: 'Belford', class: 'Two', miles: 17, elevation: 14203},
  {name: 'Missouri', class: 'Three', miles: '17', elevation: '14075'},
  {name: 'Sherman', class: 'Two', miles: '5.5', elevation: '14036'},
  {name: 'Democrat', class: 'Two', miles: 7, elevation: 14154}
];

/*
Build upon this code:
 if the search doesn't match any of the data - - a message should apear providing info about that and what next steps to take
 if same data appears in differnet places print all matching data insted of last one by JS default

*/
