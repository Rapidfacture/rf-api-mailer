# rf-api-mailer

Gets Mails settings and starts `simpleTemplateMailer`.


## Getting Started

> npm install rf-api-mailer

## Init the service


```js

var mailerOptions ={
   transporter: mainOptions., // nodemailer transporter
   defaultLanguage: 'en',
   contactMail: 'your@contactMail.com' // optional
   translationsPath: 'mail/translations',
   templatesPath: 'mail/templates',
   inlineAttribute: 'inline' // all html tags with this attribute will be "inlined" by "inline-source"
});

var services: {
   sendMail: require('rf-api-mailer').start(mailerOptions).sendMail
}

```


Assuming, that templates and translations are in one folder you might pass the path options direct like:

```js

var mailerOptions ={
   transporter: mainOptions., // nodemailer transporter
   defaultLanguage: 'en',
   contactMail: 'your@contactMail.com' // optional
});

var mailPath = 'mail';

var services: {
   sendMail: require('rf-api-mailer').start(mailerOptions, mailPath).sendMail
}

```


## Use the service
```js

var template = {
   name: 'newsletter',
   language: "en",
   data: {test: 234} // data from your app inserted in template
   inlineAttribute: "inline" // optional: individual inline configuration
};

var mailOptions = {to:["max.mustermann@gmx.net"]}; // nodemailer options


// simple example
services.sendMail(template, mailOptions, function(err, data){
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
