const button = document.querySelector(".apple-btn");

button.addEventListener("click", () => {
  button.innerText = "Loading...";
  
  setTimeout(() => {
    button.innerText = "Done ✓";
  }, 1500);
});