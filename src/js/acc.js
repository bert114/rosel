const grandParent = document.querySelector(".content");
const li = Array.from(grandParent.children);

grandParent.addEventListener("click", (e) => {
  const liTarget = e.target.closest("li");
  const chevron = liTarget.querySelector("i");

  if (e.target.matches("button") || e.target.matches("i")) {
    if (liTarget.classList.contains("active")) {
      liTarget.classList.remove("active");
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-up");
    } else {
      li.forEach((item) => {
        item.classList.remove("active");
        const icon = item.querySelector("i");
        icon.classList.add("fa-chevron-down");
        icon.classList.remove("fa-chevron-up");
      });

      liTarget.classList.add("active");
      chevron.classList.add("fa-chevron-up");
      chevron.classList.remove("fa-chevron-down");
    }
  }
});
