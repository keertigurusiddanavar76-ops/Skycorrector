const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

button.addEventListener("click", () => {
  if (textarea.value.trim() === "") {
    alert("Please enter some text first!");
  } else {
    alert("Grammar check feature coming soon 🚀");
  }
});
