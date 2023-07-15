const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./config/database");

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 3080;

app.use(express.json());
app.use("/api/v1", userRoutes);

app.listen(port, (req) => {
  console.log(`App listening on port ${port}`);
});
