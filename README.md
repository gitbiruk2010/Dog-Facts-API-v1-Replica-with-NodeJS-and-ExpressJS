# Dog-Facts-API-v1-Replica-with-NodeJS-and-ExpressJS
Dog Facts API
Welcome to the Dog Facts API project! This simple yet engaging project is designed to provide users with fun and interesting facts about dogs. Built with Node.js and Express.js, it's a lightweight, efficient API that serves dog facts in JSON format.
Features
•	Get Dog Facts: Users can retrieve a random dog fact or specify the number of dog facts they want.
•	Simple and Fast: Built with Node.js and Express.js for quick responses.
•	Easy to Use: Just a few endpoints to remember, making it super user-friendly.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites
Before you start, make sure you have Node.js installed on your system. You can download it from here.
Installation
1.	Clone the repository:
bash
git clone https://github.com/yourusername/dog-facts-api.git
cd dog-facts-api
2.	Install dependencies:
bash
npm install
3.	Start the server:
bash
npm start
By default, the server will start on port 3000. You can access the API at http://localhost:3000.
Usage
Endpoints
•	GET /: Displays a welcome message.
•	GET /facts: Retrieves dog facts.
o	Optional query parameter: ?number=x where x is the number of facts you want to receive.
Examples
•	Get a random dog fact:
bash
curl http://localhost:3000/facts
•	Get 5 dog facts:
bash
curl http://localhost:3000/facts?number=5
Built With
•	Node.js - The runtime server environment.
•	Express.js - The web application framework.
See also the list of contributors who participated in this project.
Acknowledgments
•	School project
Feel free to customize this README to fit the specifics of your project better. Good luck with your development!

