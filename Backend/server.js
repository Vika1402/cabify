const http = require("http");
const app = require("./app.js");
const connectDb = require("./db/db.js");

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
  connectDb();
});
