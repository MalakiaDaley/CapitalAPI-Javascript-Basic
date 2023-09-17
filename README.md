<!DOCTYPE html>
<html>

<head>
    <title>Capital API JavaScript Client</title>
    <link rel="stylesheet" href="https://img.shields.io/github/license/yourusername/capital-api-js">
    <link rel="stylesheet" href="https://img.shields.io/github/v/release/yourusername/capital-api-js">
</head>

<body>
    <h1>Welcome to the Capital API JavaScript Client!</h1>
    <p>This library provides a simple and efficient way to interact with the Capital API, allowing you to access
        account information, retrieve balances, and manage positions with ease.</p>
    <img src="assets/capital-api-client.png" alt="Capital API Client">

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="installation">Installation</h2>
    <p>To get started, you can install the Capital API JavaScript Client using npm:</p>
    <pre><code>npm install capital-api-js</code></pre>

    <h2 id="usage">Usage</h2>
    <p>Here's how you can use the Capital API JavaScript Client to connect to the Capital API:</p>
    <pre><code>import { Client } from "capital-api-js";

// Initialize the client with your API credentials
const token = "YOUR_API_TOKEN";
const email = "YOUR_EMAIL";
const password = "YOUR_PASSWORD";

const capitalClient = new Client(token, email, password);
</code></pre>

    <h3>Creating a Session</h3>
    <p>To create a session and retrieve authentication tokens:</p>
    <pre><code>await capitalClient.createSession();
</code></pre>

    <h3>Retrieving Account Information</h3>
    <p>You can easily get your account information:</p>
    <pre><code>const accountInfo = capitalClient.account();
console.log("Account Information:", accountInfo);
</code></pre>

    <h3>Retrieving Account Balance</h3>
    <p>To get your account balance:</p>
    <pre><code>const balance = await capitalClient.requestBalance();
console.log("Account Balance:", balance);
</code></pre>

    <h3>Retrieving Currency Information</h3>
    <p>Retrieve currency symbol and name:</p>
    <pre><code>const currencySymbol = capitalClient.currencySymbol();
const currencyName = capitalClient.currencyName();

console.log("Currency Symbol:", currencySymbol);
console.log("Currency Name:", currencyName);
</code></pre>

    <h3>Retrieving Order Positions</h3>
    <p>Get a list of your order positions:</p>
    <pre><code>const positions = await capitalClient.orderPositions();
console.log("Order Positions:", positions);
</code></pre>

    <h3>Retrieving a Specific Order Position</h3>
    <p>To retrieve a specific order position by deal ID:</p>
    <pre><code>const dealID = "YOUR_DEAL_ID";
const position = await capitalClient.orderPosition(dealID);
console.log("Order Position:", position);
</code></pre>

    <h2 id="features">Features</h2>
    <ul>
        <li>Create and manage Capital API sessions effortlessly.</li>
        <li>Retrieve account information, including balances and currency details.</li>
        <li>Access your order positions with ease.</li>
        <li>Built-in error handling for a smooth development experience.</li>
        <li>Customizable request headers for advanced use cases.</li>
    </ul>

    <h2 id="contributing">Contributing</h2>
    <p>We welcome contributions from the community. If you encounter any issues or would like to contribute to this
        library, please <a href="https://github.com/yourusername/capital-api-js/issues">create an issue</a> on GitHub.</p>

    <h2 id="license">License</h2>
    <p>This library is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

    <p>Thank you for using the Capital API JavaScript Client! We hope it simplifies your interactions with the Capital
        API. If you have any questions or need further assistance, please don't hesitate to reach out to us. Happy
        coding! 🚀</p>
</body>

</html>
