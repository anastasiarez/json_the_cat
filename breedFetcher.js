const request = require('request');
const breedName = process.argv[2];

// fetchBreedDescription: build the API URL based on the provided breedName
// send a GET request to the API endpoint using request.get
// handle the response in the callback

const fetchBreedDescription = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // ?q= The q stands for "query" and is followed by the value you want to search for.
  // ?  is used to indicate the beginning of the query string.

  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error', error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      const description = data[0].description;
      console.log(description);

    }
  });
};

fetchBreedDescription(breedName); 