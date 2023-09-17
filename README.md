**Capital API Client for JavaScript**
Welcome to the Capital API Client for JavaScript! This library allows you to interact with the Capital API to retrieve account information, manage sessions, and retrieve position data.

**Installation**
You can install this package using npm:

**npm install capital-api-client**

Usage
To get started, import the Client class from the package and create an instance with your API credentials:

**javascript**

import { Client } from "capital-api-client";

const token = "YOUR_API_TOKEN"; // for any requests
const email = "YOUR_EMAIL"; // for the create session
const password = "YOUR_PASSWORD"; // for the create session

const capitalClient = new Client(token, email, password);
Creating a Session
To create a session and retrieve authentication tokens:

**javascript**

await capitalClient.createSession();
Retrieving Account Information
To get your account information:

**javascript**

const accountInfo = capitalClient.account();
console.log("Account Information:", accountInfo);
Retrieving Account Balance
To get your account balance:

**javascript**

const balance = await capitalClient.requestBalance();
console.log("Account Balance:", balance);
Retrieving Currency Information
To get the currency symbol and name:

**javascript**

const currencySymbol = capitalClient.currencySymbol();
const currencyName = capitalClient.currencyName();

console.log("Currency Symbol:", currencySymbol);
console.log("Currency Name:", currencyName);
Retrieving Order Positions
To retrieve your order positions:

**javascript**

const positions = await capitalClient.orderPositions();
console.log("Order Positions:", positions);
Retrieving a Specific Order Position
To retrieve a specific order position by deal ID:

**javascript**

const dealID = "YOUR_DEAL_ID";
const position = await capitalClient.orderPosition(dealID);
console.log("Order Position:", position);

**Issues and Contributions**
If you encounter any issues or would like to contribute to this library, please create an issue on GitHub.

Thank you for using the Capital API Client for JavaScript! We hope it simplifies your interactions with the Capital API.
