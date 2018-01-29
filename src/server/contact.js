const sendGrid = require('sendgrid');

const helper = sendGrid.mail;
const toEmail = helper.Email(process.env.TO_EMAIL || 'example@example.com');
const subject = 'Demande de contact Infinitix';
const sg = sendGrid(process.env.SENDGRID);

const sendEmail = (name, from, content) => new Promise((resolve, reject) => {
  const fromEmail = new helper.Email(from, name);
  const contentEmail = new helper.Content('text/html', content);
  const mail = new helper.Mail(fromEmail, subject, toEmail, contentEmail);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, (error) => {
    if (error) {
      reject();
    }
    resolve();
  });
});

module.exports = {
  sendEmail,
};
