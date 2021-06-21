const { id, name, preview, photos, description, brand, price } = productData;

var c = document.getElementById("product-main-image");
// setting name
var nameElement = document.getElementById("product-name");
nameElement.textContent = name;

// setting brand
var brandElement = document.getElementById("product-brand");
brandElement.textContent = brand;
brandElement.style = "font-weight: normal;";

// setting price
var priceElement = document.getElementById("product-price");
priceElement.textContent = "Price: Rs ";

var priceTag = document.createElement("span");
priceTag.textContent = price;
priceTag.className = "price-tag";
priceTag.style = "color:  #009688; margin-top: 20px;";

priceElement.appendChild(priceTag);

// setting description
var descriptionElement = document.getElementById("product-description");
descriptionElement.textContent = description;

var previewRow = document.getElementById("preview-row");
var mainPreview = document.getElementById("product-main-image");

for (let i = 0; i < photos.length; i++) {
  photo = photos[i];

  var ImageElemt = document.createElement("img");
  ImageElemt.id = i;
  if (i == 0) ImageElemt.className = "PreviewImage active-preview";
  else ImageElemt.className = "PreviewImage";
  ImageElemt.src = photo;

  ImageElemt.addEventListener("click", function () {
    document.getElementById("product-main-image").src = photos[i];
  });

  ImageElemt.addEventListener("click", function (i) {
    allPreview = document.getElementsByClassName("PreviewImage");
    for (element of allPreview) {
      element.classList.remove("active-preview");
    }
    i.target.classList.add("active-preview");
  });
  previewRow.appendChild(ImageElemt);
}
