/**
 * API mailer service
 */

const simpleTemplateMailer = require('simple-template-mailer');
const path = require('path');

module.exports = {

   mailer: {},
   options: {},

   start: function (mainOptions, mainPath) {

      // defaults
      let opts = module.exports.options;
      opts = mainOptions || {};
      opts.translationsPath = mainOptions.translationsPath || path.join(mainPath + '/translations');
      opts.templatesPath = mainOptions.templatesPath || path.join(mainPath + '/templates');
      opts.inlineAttribute = (mainOptions.inlineAttribute || mainOptions.inlineAttribute === false) ? mainOptions.inlineAttribute : 'inline';

      // create mailer instance
      module.exports.mailer = simpleTemplateMailer(opts);

      // give back all functions
      return module.exports;
   },

   sendMail: function (template, options, callback) {
      // defaults
      options = options || {};
      options.from = options.from || module.exports.options.from || module.exports.options.contactMail;
      options.replyTo = options.replyTo || module.exports.options.contactMail;
      module.exports.mailer.send(template, options, callback);
   },

   getTemplate: function () {
      module.exports.mailer.getTemplate.apply(null, arguments);
   }

};
