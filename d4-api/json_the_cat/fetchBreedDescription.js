const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const API = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName.toLowerCase().slice(0, 4);
  request(API, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body); 
      if (data[0] !== undefined) {
        const description = data[0].description;
        callback(error, description);
      } else {
        callback(error, "no description of such cats");
      }
    } else {
      callback(error, undefined);
    }
  });
};


module.exports = fetchBreedDescription;