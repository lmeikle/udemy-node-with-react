const fetch = require("node-fetch");

fetchUsers = userID => {
  return fetch(`http://catappapi.herokuapp.com/users/${userID}`)
    .then(response => response.json())
    .then(data => {
      let cats = data.cats;

      /**Returns nothing as forEach returns nothing
      return cats.forEach(catID => {
        return fetch(`http://catappapi.herokuapp.com/cats/${catID}`)
          .then(response => response.json())
          .then(data => data.name);
      });*/

      // map returns an array of promises, we can then use promise.all with it
      return Promise.all(
        cats.map(catID => {
          return fetch(`http://catappapi.herokuapp.com/cats/${catID}`)
            .then(response => response.json())
            .then(data => data.name);
        })
      ).then(names => names);
    });
};

fetchUsers(123).then(results => {
  console.log("results", results);
});


/**
 * TIMEOUTS
 */
let timeoutPromise = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'foo');
});

timeoutPromise.then(_ => {
  console.log("timeout finished");
});


/**
 * When use Promise.resolve(x), Promise.reject(x)
 *
 * In simple terms, inside a then handler function:

A) When x is a value (number, string, etc):

return x is equivalent to return Promise.resolve(x)
throw x is equivalent to return Promise.reject(x)
B) When x is a Promise that is already settled (not pending anymore):

return x is equivalent to return Promise.resolve(x), if the Promise was already resolved.
return x is equivalent to return Promise.reject(x), if the Promise was already rejected.
C) When x is a Promise that is pending:

return x will return a pending Promise, and it will be evaluated on the subsequent then.
 */
