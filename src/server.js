const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());

// Serve the Excel file from the same folder
app.get('/excel', (req, res) => {
  const filePath = path.join(__dirname, 'data.xlsx');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
