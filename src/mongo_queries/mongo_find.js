const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) {
    throw err;
  }

  const dbo = db.db("mydb");

  // To get customers data by mongoose query
  dbo.collection("customers").findOne({}, function (err, result) {
    if (err) {
      throw err;
    }
    console.log("result.name", result.name);
    db.close();
  });
});
