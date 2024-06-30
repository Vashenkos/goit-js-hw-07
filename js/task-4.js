document.querySelector(".login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  for (const [key, value] of formData.entries()) {
    if (value.trim() === "") {
      alert("All form fields must be filled in");
      return;
    }
  }

  console.log(Object.fromEntries(formData));
  event.target.reset();
});
