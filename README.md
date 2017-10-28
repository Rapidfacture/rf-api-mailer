# rf-api-mailer
⚠ unstable - do not use now ⚠

* Service for the `rf-api` project. 
* Provides the `startMailer` function for the API
* Starts a `simpleTemplateMailer`
* Includes the `sendMail` function

## Getting Started

To install the module:

> npm install rf-api-mailer

### Example

To load the module load the `rf-api` module first:
```js

// load API
var API = require("rf-load").require("rf-api").API;

// load module and give saveDir parameter (path where the pdfs are stored)
require("rf-load").module("rf-api-mailer"); 
```
Include the `startMailer` function at your wished position:
```js
API.ServiceFactory.startMailer();
```

## Dependencies

Needs to have `simple-template-mailer` & `rf-api` to be installed.


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
