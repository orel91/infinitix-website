const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');
const { sendEmail } = require('./contact');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

const isStringValid = (string) => {
  if (_.isEmpty(string)) {
    return false;
  }
  return _.isString(string);
};

app.post('/api/contact', (req, res) => {
  const body = _.pick(req.body, ['name', 'email', 'message']);
  const { name, email, message } = body;

  if (!isStringValid(name) || !isStringValid(email) || !isStringValid(message)) {
    res.status(400).send();
    return;
  }

  sendEmail(name, email, message)
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
});

app.listen(port, () => console.log('Started'));
