const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const products = [
  {
    id: "1",
    name: "Bionico Fruit salad",
    price: "20000",
    image: "images/buah1.png",
  },
  {
    id: "2",
    name: "Mexican strawberry",
    price: "20000",
    image: "images/buah3.png",
  },
  {
    id: "3",
    name: "Corn Chowder Broth Potage",
    price: "20000",
    image: "images/sayur1.png",
  },
  {
    id: "4",
    name: "Pad Thai",
    price: "20000",
    image: "images/sayur2.png",
  },
  {
    id: "5",
    name: "Juice Milkshake Pineapple",
    price: "20000",
    image: "images/drink2.png",
  },
  {
    id: "6",
    name: "Juice Milkshake Banana",
    price: "20000",
    image: "images/drink4.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`server jalan ${port}`);
});
