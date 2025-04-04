require("dotenv").config()
const mongoose = require("mongoose");

mongoose
    .connect(
      `mongodb+srv://csstudyme:Cs1234@cluster0.pyk6hyf.mongodb.net/youtube?retryWrites=true&w=majority&appName=Cluster0`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB

