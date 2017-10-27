# rf-api-mailer

* unstable - do not use now
* will be the common part for every rapidfacture app

API mailer service.


## Getting Started

> npm install rf-api-mailer

## Example
```js
// load API
var API = require("rf-load").require("rf-api").API;

// load module and give saveDir parameter (path where the pdfs are stored)
require("rf-load").module("rf-api-mailer"); 

/** 
* startMailer: start the mailer
*/
API.ServiceFactory.startMailer(); // execute startMailer function
```

## Dependencies

Needs to have simple-template-mailer & rf-api to be installed.


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
