# rf-api-mailer

Gets Mails settings and starts `simpleTemplateMailer`.


## Getting Started

> npm install rf-api-thumbnail

## Init the service


```js

var mailerOptions ={
   transporter: mainOptions., // nodemailer transporter
   defaultLanguage: 'en',
   contactMail: 'your@contactMail.com' // optional
   translationsPath: 'mail/translations',
   templatesPath: 'mail/templates',
});

var services: {
   sendMail: require('rf-api-mailer').start(mailerOptions).sendMail
}

```

## Use the service
```js

// simple example
services.sendMail(req.data.template, req.data.mailOptions, function(err, data){
   console.log(err, data)
});

// with rf-api
API.post('/sendmail', function(req, res){
   services.sendMail(req.data.template, req.data.mailOptions, res.send);
})

```


## Development

Install the dev tools with

> npm install

Then you can runs some test cases and eslint with:

> npm test


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
