const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.get('/', function(_, res) {
  res.send('<a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=395771986882.605570020802"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>')
})

app.get('/done', function (_, res) {
  res.send('Done thx!')
})

app.post('/food', function(req, res) {
  const choiches = req.body.text.replace(/\s/g, '').split(',').filter(i => i)
  const t = Math.floor(Math.random() * choiches.length)

  res.send({
    "response_type": "in_channel",
    "text": choiches[t]
  })

});

app.listen(port);