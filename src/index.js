const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Demo User' }]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});