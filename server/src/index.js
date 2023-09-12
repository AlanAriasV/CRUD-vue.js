import app from "./app";
import config from "./config";
import mongoose from "mongoose";

const dbURI =
  "mongodb+srv://" +
  config.dbUser +
  ":" +
  config.dbPassword +
  "@cluster0.oflsrib.mongodb.net/ArtGallery?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((_) => app.listen(app.get("port")))
  .catch((err) => console.log(err));

console.log("Puerto en ", app.get("port"));
