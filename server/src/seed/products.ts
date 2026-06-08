import Product
from "../models/Product";

import connectDB
from "../config/db";

const seedProducts =
  async () => {

    await connectDB();

    await Product.insertMany([
      {
        name:
          "iPhone 15",

        description:
          "Apple Phone",

        category:
          "electronics",

        image:
          "https://...",

        price:
          70000,

        stock:
          10,
      },
    ]);

    console.log(
      "Products Added"
    );

    process.exit();
  };

seedProducts();