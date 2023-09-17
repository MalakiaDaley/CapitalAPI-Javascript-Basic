import fetch from "node-fetch";

class Client {
    constructor(token, email, password) { // Initiliasing Client Data for create Session
        this.privKey = token
        this.email = email
        this.password = password

        const HeadersDat ={
            "X-CAP-API-KEY": token,
            "Content-Type": "application/json"
        };
        this.Headers = HeadersDat

    };

    async createSession() { // creates the session what returns data
        var data = JSON.stringify({
            "identifier": this.email,
            "password": this.password
        })

        var transferData = {
            method: "POST",
            headers: this.Headers,
            body: data,
            redirect: "follow"
        }

        let response = await fetch("https://api-capital.backend-capital.com/api/v1/session", transferData);
        
        this.sessionData = await response.json();
        this.sessionHeaders= await response.headers;
        this.securityToken = this.sessionHeaders.get("x-security-token");
        this.CST = this.sessionHeaders.get("cst");
    };

    async requestBalance() { // Balance Amount Money

        return this.sessionData["accountInfo"]["balance"]
    };

    account(){ // Account All Json Info
        return this.sessionData["accountInfo"]
    };

    currencySymbol(){ // Currency Symbol e.g £, $
        return this.sessionData["currencySymbol"]
    };

    currencyName(){ // currency Name e.g GBP, USD
        return this.sessionData["currencyIsoCode"]
    };

    async orderPositions() { // Tested returns results
        let headers = {
            "X-SECURITY-TOKEN": this.securityToken,
            "CST": this.CST
        };

        var transferData = {
            method: "GET",
            headers: headers,
            redirect: "follow"
        }

        let response = await fetch("https://api-capital.backend-capital.com/api/v1/positions", transferData)
        let jsonResult = await response.json()
        return jsonResult
    };

    async orderPosition(dealID) { // NOT TESTED
        let headers = {
            "X-SECURITY-TOKEN": this.securityToken,
            "CST": this.CST
        };

        var transferData = {
            method: "GET",
            headers: headers,
            redirect: "follow"
        }

        let response = await fetch(`https://api-capital.backend-capital.com/api/v1/positions/${dealID}`, transferData)
        let jsonResult = await response.json()
        return jsonResult
    };
}
