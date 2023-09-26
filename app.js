const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
 
const app = express();

app.use(bodyParser.urlencoded());

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req,res,next) => {
  res.status(404).send("<h1>Page Not Found!!</h1>")
})

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is runing port 3000");
});
