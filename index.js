/**
 * API mailer service
 */

var simpleTemplateMailer = require('simple-template-mailer');

// logging
var log = {
   success: console.log,
   error: console.error,
   critical: function () {
      throw new Error(console.error.apply(arguments));
   }
};
try { // try using rf-log
   log = require(require.resolve('rf-log')).customPrefixLogger('[rf-api-mailer]');
} catch (e) {}

module.exports.start = function (mainOptions) {

   // validate options
   if (!mainOptions.transporter) {
      log.error('no transporter defined, aborting');
      return;
   }
   if (!mainOptions.translationsPath) {
      log.error('no translationsPath defined, aborting');
      return;
   }
   if (!mainOptions.templatesPath) {
      log.error('no templatesPath defined, aborting');
      return;
   }


   // create mailer instance
   var mailer = simpleTemplateMailer({
      transporter: mainOptions.transporter, // mailserver config data
      defaultLanguage: mainOptions.defaultLanguage,
      // paths: from config file
      translationsPath: mainOptions.translationsPath,
      templatesPath: mainOptions.templatesPath
   });


   // give back send mail function
   return {
      sendMail: function (template, options, callback) {
         options = options || {};
         options.from = options.from || mainOptions.contactMail;
         options.replyTo = options.replyTo || mainOptions.contactMail;
         if (!callback) {
            log.error('no callback defined, aborting');
            return;
         }

         mailer.send(template, options, function (data, info) {
            log.success('mail sent');
            callback(null, data);
         }, function (err, info) {
            log.error('mailer error ', err, info);
            callback(err, null);
         });
      }
   };
};
