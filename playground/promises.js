const fetch = require("node-fetch");

const sydneyURL =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Sydney";
const londonURL =
  "https://maps.googleapis.com/maps/api/geocode/json?address=London";
const athensURL =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Athens";

new Promise((resolve, reject) => {



})

const fetchLondon = () => {
  fetch(londonURL)
    .then(
      response => response.json(),
      error => {
        console.log("there was an error with json()", error);
      }
    )
    .then(
      json => console.log(`1 City: ${json.results[0].formatted_address}`),
      error => {
        console.log("there was an logging the result", error);
      }
    )
    /**.then(_ => fetchSydney(), error => {
      console.log("there was an error calling the next fetch");
    })*/
    .catch(error => {
      console.log("catch error" + error);
    });
};

const fetchSydney = () => {
  fetch(sydneyURL)
    .then(
      response => {
        response.json().then(
          json => {
            console.log(`2 City: ${json.results[0].formatted_address}`);
          },
          error => {
            console.log("there was an error with json()", error);
          }
        );
      },
      error => {
        console.log("there was an logging the result", error);
      }
    )
    .catch(error => {
      console.log("catch error" + error);
    });
};

const fetchLondon2 = () => fetch(londonURL);
const fetchSydney2 = () => fetch(sydneyURL);

Promise.all([
  fetchLondon2(),
  fetchSydney2()
]).then(responses => {
  responses.forEach(response => {
    //console.log("response", response)
    response.json().then(
      json => {
        console.log(`a City: ${json.results[0].formatted_address}`);
      },
      error => {
        console.log("there was an error with json()", error);
      }
    );
  });
},
error => {
  console.log("there was an logging the result", error);
})
