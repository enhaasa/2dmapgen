const express = require('express');
const app = express();
const port = 5000;

app.get('/test', (req, res) => {
  res.send('Hejsan Svejsan!');
});

app.listen(port, () => {
  console.log('Server listening on port', port);
});
