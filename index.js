/* jshint node: true */ "use strict";

/**
 * API service: add a mailer
 */

var config = require("rf-config"),
   log = require("rf-log"),
   simpleTemplateMailer = require('simple-template-mailer'),
   API = require("rf-load").require("rf-api").API,
   db = require("rf-load").require("db").db;

module.exports.start = function(options, next) {

   // get mail settings from db
   db.global.settings
      .findOne({
         "name": "mail"
      })
      .exec(function(err, doc) {
         if (doc && doc.settings) {
            config.mail = doc.settings;
            startMailer();
         } else {
            log.error("no mail settings found in DB global");
         }
      });


      function startMailer() {
         var mailer = simpleTemplateMailer({ // create instance
            // from db
            transporter: config.mail.transporter,
            defaultLanguage: config.mail.defaultLanguage,
            // paths: from config file
            translationsPath: config.configPaths.mail + "/translations",
            templatesPath: config.configPaths.mail + "/templates"
         });


         function sendMail(template, options, sucessFunction, errorFunction) {
            options = options || {};
            options.from = options.from || config.mail.contactMail;
            options.replyTo = options.replyTo || config.mail.contactMail;

            var self = this; // this will hold variables from the answer function

            mailer.send(template, options, function(data, info) {
               log.success("mail sent");
               if (sucessFunction){
                  sucessFunction(data, info);
               }
            }, function(err, info) {
               if (errorFunction){
                  log.error("mailer error ", err, info);
                  errorFunction(err, info);
               } else {

                  // TODO better custom errors here

                  self.error("Mailer error: " + err);
                  return;
               }
            });
         }

         API.ServiceFactory.registerFunction(sendMail);

         //console.log(API);

         next();
      }

};
