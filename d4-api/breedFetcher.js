const request = require('request');
let breed = process.argv[2].toLowerCase().slice(0,4);
const API = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(API, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (response.statusCode === "404") {
    console.log(`page for ${process.argv[2]} not found`);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});