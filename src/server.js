const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

//console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    console.log("server accessed");
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
  });
}