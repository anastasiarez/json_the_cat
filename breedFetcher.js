const request = require('request');


// fetchBreedDescription: build the API URL based on the provided breedName
// send a GET request to the API endpoint using request.get
// handle the response in the callback

//fetchBreedDescription function takes in the breedName and a callback function as parameters. Inside the function, the request logic is performed, and the callback is called with either an error or the description.

//The callback is invoked with the first argument being the error (if there is one) or null if there isn't an error. The second argument of the callback is the description (if available) or null if the breed is not found.


const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // ?q= The q stands for "query" and is followed by the value you want to search for.
  // ?  is used to indicate the beginning of the query string.

  request.get(url, (error, response, body) => {
    if (error) {
      callback(null, error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Breed '${breedName}' not found.`, null);
    } else {
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };