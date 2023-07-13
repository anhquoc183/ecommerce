const mongoose = require("mongoose");
async function connect() {
  try {
    const url = "mongodb://127.0.0.1:27017/Quoc"
    await mongoose.connect(
    url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("Connect successfully!!");
  } catch (error) {
    console.log("Connect failure!!");
  }
}
module.exports = { connect };
