import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.post('/api/postest', (req, res) => {
  res.send(`Received POST data: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});