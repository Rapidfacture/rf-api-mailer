/**
 * API mailer service
 */

var simpleTemplateMailer = require('simple-template-mailer');
var path = require('path');

module.exports.start = function (mainOptions, mainPath) {

   // create mailer instance
   var mailer = simpleTemplateMailer({
      transporter: mainOptions.transporter, // mailserver config data
      defaultLanguage: mainOptions.defaultLanguage,
      // paths
      translationsPath: mainOptions.translationsPath || path.join(mainPath + '/translations'),
      templatesPath: mainOptions.templatesPath || path.join(mainPath + '/templates'),
      inlineAttribute: (mainOptions.inlineAttribute || mainOptions.inlineAttribute === false) ? mainOptions.inlineAttribute : 'inline'
   });

   // give back send mail function
   return {
      sendMail: function (template, options, callback) {
         options = options || {};
         options.from = options.from || mainOptions.contactMail;
         options.replyTo = options.replyTo || mainOptions.contactMail;
         mailer.send(template, options, callback);
      },
      getTemplate: mailer.getTemplate
   };
};
