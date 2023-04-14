const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) done(data);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => print out details correctly.
};
//The reason we pass a callback function to breedDetailsFromFile is to allow the function to be more flexible and reusable. Instead of hard-coding a specific action to be taken with the file contents within breedDetailsFromFile, we allow the user of the function to define their own callback function that will handle the contents of the file in any way they need.


// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);