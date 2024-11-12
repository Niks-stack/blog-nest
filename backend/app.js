const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users-routes");
const blogsRoutes = require("./routes/blogs-routes");

app.use(bodyParser.json());

app.use("/api/users", usersRoutes);
app.use("/api/blogs", blogsRoutes);


app.use((req, res, next) => {
  throw new HttpError("The requested URL was not found on this server.", 404);
});

app.use((error, req, res, next) => {
  if (res.header.sent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message } || "An unknown has occurred");
});

mongoose
  .connect(
    "mongodb+srv://rubiyasultana0:XModpunalhHyD6Na@cluster1.sysbg.mongodb.net/BlogNest?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    app.listen(8080, () => console.log("App is running on port 8080"));
  })
  .catch((err) => {
    console.log(err);
  });

//password XModpunalhHyD6Na
  
