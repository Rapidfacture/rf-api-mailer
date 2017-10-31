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
load.file('rf-api')

// plug in mailer into the api
load.module("rf-api-mailer");

```


### Use the service
```js
// load Services
var Service = require("rf-load").require("rf-api").API.ServiceFactory;

/** use it
* @param template: template name as string
* @param options: nodeMailer mailOptions
* @param sucessFunction
* @param errorFunction
*/

Service.sendMail(stream, res, func);
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
