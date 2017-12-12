# rf-api-mailer

⚠ unstable - do not use now ⚠

Service for the `rf-api` project. Gets Mails settings from global db, starts mailer (`simpleTemplateMailer`).


## Getting Started

> npm install rf-api-mailer

### Init the service


```js
var Loader = require('rf-load').moduleLoader
var load = new Loader()
load.setModulePath(config.paths.modules)

// other stuff
load.file('db')
load.file('http')

// start request api
load.module('rf-api')

// plug in mailer into the api
load.module("rf-api-mailer");

```

### Use the service
```js

var API = require("rf-load").require("rf-api").API;

API.post('/mail', function(req, res, services){

   services.sendMail(req.data.template, req.data.mailOptions, function(err, thumbnail){
      res.send(err, thumbnail)
   });

})

```

## Peer Dependencies
* `rf-api`


## Development

Install the dev tools with

> npm install

Then you can runs some test cases and eslint with:

> npm test


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
