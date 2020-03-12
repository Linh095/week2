const request = require('request');
const fs = require('fs');
const readline = require('readline');


const websiteURL = process.argv[2];
const fileSaveName = process.argv[3];
let fileSize = 0;

//function to write out and save file
const writtingFile = (websiteText) => {
  //get file size
  fileSize = Buffer.byteLength(websiteText);

  //check if file already exists
  fs.access(fileSaveName, fs.F_OK, (err) => {
    if (err) {
      //write new file if it doesn't exist yet
      fs.writeFile(fileSaveName, websiteText, function (err) {
        if (err) throw err;
        console.log(`Downloaded and saved ${fileSize} bytes to ${fileSaveName}`);
      })
      return
    }

    //console log if the file does 
    console.log("File already exists: " + fileSaveName);


    console.error('error' + err);
    return
  })
}


request(websiteURL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  //incase the page doesn't exist


  //do something to the body
  // console.log('body:', body);
  writtingFile(body);

});