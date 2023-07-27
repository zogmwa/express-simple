const express = require("express")
var cors = require('cors');
const app = express()

app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    'message': 'Hello World'
  })
})

app.post("/", (req, res) => {
  res.status(200).json({
    'data': req.body
  })
})

app.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});
