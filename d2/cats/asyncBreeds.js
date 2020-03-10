const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      return functionToRunWhenThingsAreDone(data);
    } else {
      // console.log("there is an error")
      return functionToRunWhenThingsAreDone(undefined);
    }
  });
};

// // CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  if(breed === undefined) {
    console.log(undefined);
  } else {
   console.log('Return Value: ', breed) // => print out details correctly.
  }
};

// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);

// breedDetailsFromFile('Saphire', printOutCatBreed);

module.exports = { breedDetailsFromFile, printOutCatBreed};