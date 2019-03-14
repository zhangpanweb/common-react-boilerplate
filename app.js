const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || '3100';

app.use(express.static('dist'));

app.get('/*', async (req, res) => {
  const page = fs.readFileSync('./views/index.html');
  res.end(page);
});

app.listen(PORT, () => {
  console.log(`Server has been listening on ${PORT}`);
});
