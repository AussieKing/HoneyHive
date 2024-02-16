
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 3001;

connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello World!"));
app.use('/api/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
