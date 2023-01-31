const mongoose = require("mongoose");
const connectionString = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);

module.exports = {
  connect: async () => {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connect mongodb successfully!!!"))
      .catch((err) => console.log("Connect mongodb failure!!!", err));
  },
};
