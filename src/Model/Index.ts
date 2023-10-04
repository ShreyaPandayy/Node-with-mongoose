module.exports = () => {
  const Mongoose = require("mongoose");

  // Connection to mongoDB.
  Mongoose.connect(
    process.env.MONGOOES_PATH!,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err: Error) =>
      err
        ? console.log("Enable to connect to the database due to:", err)
        : console.log("MongoDB connection successful!")
  );
};
