// fetch(`https://dummyjson.com/products/search?q=`);
const btnSpread = document.querySelector(".btn");
const btnSearch = document.querySelector(".btn-search");
const inputBox = document.querySelector(".products-from");
const loading = document.querySelector(".loading-icon");

async function getProducts(keyword) {
  loading.style.display = "block";
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${keyword}`
    );
    const data = await res.json();
    contentRender(data.products);
  } catch (error) {
  } finally {
    loading.style.display = "none";
  }
}

getProducts("");

function contentRender(products) {
  const productsContainerEl = document.querySelector(".products");
  productsContainerEl.innerHTML = "";

  products.forEach((product) => {
    const mainDivEl = cardBoxes(product);
    productsContainerEl.append(mainDivEl);
  });
}

function cardBoxes(product) {
  const mainDivEl = document.createElement("div");
  mainDivEl.classList.add("product");
  const wrapDivEl = document.createElement("div");
  wrapDivEl.classList.add("image-wrapper");
  const contentDivEl = document.createElement("div");
  contentDivEl.classList.add("content");
  const imageEl = document.createElement("img");
  imageEl.src = product.thumbnail;
  const titleEl = document.createElement("h3");
  titleEl.textContent = product.title;
  const btnEl = document.createElement("button");
  btnEl.classList.add("detail-btn");
  btnEl.textContent = "დეტალები";
  mainDivEl.append(wrapDivEl, contentDivEl);
  wrapDivEl.append(imageEl);
  contentDivEl.append(titleEl, btnEl);
  return mainDivEl;
}

btnSpread.addEventListener("click", () => {
  inputBox.classList.toggle("active");
});

btnSearch.addEventListener("click", () => {
  const input = document.querySelector(".input");
  console.log(input.value);
  getProducts(`${input.value}`);
});
