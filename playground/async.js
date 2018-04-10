const fetch = require("node-fetch");

async function fetchUsers(userID) {
  let response = await fetch(`http://catappapi.herokuapp.com/users/${userID}`);
  let data = await response.json();

  // this works but does each one sequentially, which is not performant as these can all be done at the same time
  /**const catNames = [];
  for (const catID of data.cats)
  {
    let response = await fetch(`http://catappapi.herokuapp.com/cats/${catID}`);
    let data = await response.json();
    catNames.push(data.name);
  }
  return catNames;*/

  // we could use promises here instead
  return Promise.all(
    data.cats.map(async function(catID) {
      let response = await fetch(
        `http://catappapi.herokuapp.com/cats/${catID}`
      );
      let data = await response.json();
      return data.name;
    })
  )
}

fetchUsers(123).then(results => {
  console.log("results", results);
});

//Example of iterating sequentially with Promises but can see that await it much nicer
const getAllUsers = new Promise((resolve, reject) => {
  setTimeout(resolve(["sarah", "laura", "andrew"]), 1000);
});
const processUser = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(user + " processed");
      resolve(user + " processed");
    }, 1000);
  });
};

// promises
getAllUsers.then(users => {
  console.log("getAllUsers", users);
  users.reduce((lastPromise, user) => {
    return lastPromise.then(() => processUser(user));
  }, Promise.resolve());
});

// await
getAllUsers.then(async function(users) {
  console.log("getAllUsers", users);
  for (let user of users) {
    await processUser(user);
  }
});

/**
 * TIMEOUTS - THERE IS NO POINT TO THIS! CAN DO WITH JUST
 * makeTimeoutPromise().then(_ => {
   console.log("makeTimeoutPromise finished");
 });
 */
const makeTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  });
}

async function timeoutExample()
{
  await makeTimeoutPromise();
}

timeoutExample().then(_ => {
  console.log("timeout finished");
});

makeTimeoutPromise().then(_ => {
  console.log("makeTimeoutPromise finished");
});
