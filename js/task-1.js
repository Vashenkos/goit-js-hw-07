const categoriesList = document.querySelector("ul#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories is: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Element: ${categoryItems}`);
});
