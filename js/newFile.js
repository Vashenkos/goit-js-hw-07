// Перебрати кожну вкладку ul
tabs.forEach((tab) => {
  const liItems = tab.querySelectorAll("li,h2");

  console.log(`Number of categories ${liItems.length} `);
});
