/**
 * API mailer service
 */

var simpleTemplateMailer = require('simple-template-mailer');
var path = require('path');

module.exports.start = function (mainOptions, mainPath) {

   // defaults
   mainOptions = mainOptions || {};
   mainOptions.translationsPath = mainOptions.translationsPath || path.join(mainPath + '/translations');
   mainOptions.templatesPath = mainOptions.templatesPath || path.join(mainPath + '/templates');
   mainOptions.inlineAttribute = (mainOptions.inlineAttribute || mainOptions.inlineAttribute === false) ? mainOptions.inlineAttribute : 'inline';

   // create mailer instance
   var mailer = simpleTemplateMailer(mainOptions);

   // give back send mail function
   return {
      sendMail: function (template, options, callback) {
         // defaults
         options = options || {};
         options.from = options.from || mainOptions.contactMail;
         options.replyTo = options.replyTo || mainOptions.contactMail;

         mailer.send(template, options, callback);
      },
      getTemplate: mailer.getTemplate
   };
};
