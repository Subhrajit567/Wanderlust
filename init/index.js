const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // const formattedData = initData.data.map((listing) => {
  //   return {
  //     ...listing,
  //     image: listing.image.url, // replace object with just the URL string
  //   };
  // });
  // initData.data = initData.data.map((obj) => ({...obj, owner: '6a258699eaad3d6070d0dc8c'}));
  // await Listing.insertMany(formattedData);
const formattedData = initData.data.map((listing) => ({
  ...listing,
  owner: "6a258699eaad3d6070d0dc8c"
}));

await Listing.insertMany(formattedData);

  console.log("data was initialized");
};


initDB();