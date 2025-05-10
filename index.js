const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/sayHello', (req, res) => {
  console.log('Received GET request to /sayHello');
  res.json({ message: 'Hello User' });
  console.log('Sent response to /sayHello');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Server started successfully');
});