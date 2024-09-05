import "../scss/main.scss";

const body = document.body;
body.style.overflowY = "hidden";
const loading = document.querySelector(".loader");

// Import the module and wait for it to be resolved
Promise.all([import("./acc.js")])
  .then(() => {
    // Wait for 3 seconds before hiding the loading screen
    return new Promise((resolve) => setTimeout(resolve, 3000));
  })
  .then(() => {
    loading.style.display = "none";
    body.style.overflowY = "";
  })
  .then(() => console.log("website is loaded"));
