const productDetails = {
  name: "Samsung 2020  Laptop",
  price: 23000,
  color: "red",
  hardDisk: "250 GB",
};



console.log("Below are the product details: ");
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}