//importing Express using ES Module syntax
import express from 'express';
//importing dog facts data using ES Module syntax
import { data } from './dog_facts.js';
const app = express();
const port = 3000;

//this is a root endpoint to welcome users
app.get('/', (req, res) => {
  res.send('Welcome to the Dog Facts API!');
});

//this is to get facts endpoint to return dog facts
app.get('/facts', (req, res) => {
  let { number } = req.query;
  let facts = data;

  //filtering the array to return the specified number of facts if the value of the query is availabale 
  if (number !== undefined) {
    number = parseInt(number);
    if (!isNaN(number) && number > 0) {
      facts = facts.slice(0, number);
    } else {
      //returns error if the value is not detected
      return res.status(400).json({ error: "Invalid 'number' query parameter. Please provide a positive integer." });
    }
  }

  //returns the requested the entire dog facts if no value is typed
  res.json({ facts: facts, success: true });
});

//error handling if there are unmatched routes
app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

//starts the server node server.js
app.listen(port, () => {
  console.log(`Dog Facts API server running on http://localhost:${port}`);
});
