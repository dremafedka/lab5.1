const products = {
  1: { id: 1, name: "Product 1", price: 100 },
  2: { id: 2, name: "Product 2", price: 200 },
  3: { id: 3, name: "Product 3", price: 300 }
};

function getProductDetails(productId, successCallback, errorCallback) {
  setTimeout(() => {
    const product = products[productId];
    if (product) {
      successCallback(product);
    } else {
      errorCallback("Product not found");
    }
  }, 1000);
}

function successCallback(product) {
  const productInfo = document.getElementById("product-info");
  productInfo.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
    `;
}

function errorCallback(errorMessage) {
  const productInfo = document.getElementById("product-info");
  productInfo.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
}

const productId = 2;
getProductDetails(productId, successCallback, errorCallback);
