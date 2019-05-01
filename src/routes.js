const express = require('express');
const router = express();

router.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

router.get('/employees', (req, res) => {
  let params = (req.query ? req.query : {});
  if (params.name === '') {
    return res.sendStatus(204);
  }
});

router.post('/employees', (req, res) => {
  return res.send('Received a POST HTTP method');
});

router.delete('/employees', (req, res) => {
  return res.send('Received a Delete HTTP method');
});

router.put('/employees', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

module.exports = router;
