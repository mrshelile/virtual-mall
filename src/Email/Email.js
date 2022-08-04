const nodeoutlook = require('nodejs-nodemailer-outlook');

var transporter = nodeoutlook.sendEmail({
  auth: {
      user: "mrdavertzshelile@outlook.com",
      pass: "S1helile@com"
  },
  from: 'mrdavertzshelile@outlook.com',
  to: 'davertzshelile@gmail.com',
  subject: 'Hey you, awesome!',
  html: '<b>This is bold text</b>',
  text: 'This is text version!',
  });

