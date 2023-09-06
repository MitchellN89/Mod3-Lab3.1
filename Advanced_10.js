// 10.Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)

// a) Write a new version of this function using async/await

// b) Test both functions with valid and invalid URLs

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

// fetchURLData("https://jsonplaceholder.typicode.com/todos/Q")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

async function asyncAwaitFetch(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (err) {
    console.log(err);
  }
}

// The below tests my function above - I've commented it out for clarity in later code
// asyncAwaitFetch("https://jsonplaceholder.typicode.com/todos/4");
// asyncAwaitFetch("https://jsonplaceholder.typicode.com/todos/5");
// asyncAwaitFetch("https://jsonplaceholder.typicode.com/todos/10");
// asyncAwaitFetch("https://jsonplaceholder.typicode.com/todos/15");
// asyncAwaitFetch("https://jsonplaceholder.typicode.com/todos/Q");

// Using Promise.all

const arr = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  // "https://jsonplaceholder.typicode.com/todos/Q", //uncomment this in order to have the Promise.all reject.
];

async function urlArraysFetch(urlArr) {
  return Promise.all(
    urlArr.map(async (url) => {
      const response = await fetch(url);
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    })
  );
}

urlArraysFetch(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(`Request failed with status ${rej}`);
  });
