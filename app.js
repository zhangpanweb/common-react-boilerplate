const express = require('express');

const app = express();
const fs = require('fs');

const PORT = process.env.PORT || '3100';

app.use(express.static('dist'));

app.get('/api', (req, res) => {
  console.log('111');
});

app.get('/*', (req, res) => {
  const page = fs.readFileSync('./dist/index.html');
  res.end(page);
});

app.listen(PORT, () => {
  console.log(`Server has been listening on ${PORT}`);
});
