const product = document.getElementById("product");
const productLinks = document.getElementById("product-links");

product.addEventListener("click", () => {
  if (productLinks.classList.contains("flex")) {
    productLinks.classList.remove("flex");
    productLinks.classList.add("hidden");
  } else {
    productLinks.classList.remove("hidden");
    productLinks.classList.add("flex");
  }
});
