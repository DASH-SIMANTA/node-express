const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/data', (req, res) => {
  res.send('second server port');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});