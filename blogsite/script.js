function toggleText(button) {
  const fullText = button.previousElementSibling;
  if (fullText.classList.contains("hidden")) {
    fullText.classList.remove("hidden");
    button.textContent = "Read Less";
  } else {
    fullText.classList.add("hidden");
    button.textContent = "Read More";
  }
}
