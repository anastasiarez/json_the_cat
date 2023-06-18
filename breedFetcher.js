const request = require('request');

// fetchBreedDescription: build the API URL based on the provided breedName
// send a GET request to the API endpoint using request.get
// handle the response in the callback

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

 // ?q= The q stands for "query" and is followed by the value you want to search for.
 // ?  is used to indicate the beginning of the query string.

 request.get(url, (error, response, body) => {
  const data = JSON.parse(body);