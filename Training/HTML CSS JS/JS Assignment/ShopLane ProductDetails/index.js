<script src="./data.js"></script>

const { id, name, preview, photos, description, brand, price } = productData;
console.log(photos);

var c = document.getElementById("product-main-image");
var nameElement = document.getElementById("product-name");
nameElement.textContent = name;

var brandElement = document.getElementById("product-brand");
brandElement.textContent = brand;

var priceElement = document.getElementById("product-price");
priceElement.textContent = "Rs. " + price;

var titleElement = document.getElementById("description-title");
titleElement.textContent = titleElement;

var descriptionElement = document.getElementById("product-description");
descriptionElement.textContent = description;

var c = document.getElementById("product-main-image");
var previewRow = document.getElementById("preview-row");
console.log(c);
c.src =
  "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
