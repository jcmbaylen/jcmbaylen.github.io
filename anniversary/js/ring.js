document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM content to be fully loaded

  // Get the checkbox and label elements
  const checkbox = document.getElementById("open");
  const label = document.querySelector('label[for="open"]');

  // Add a change event listener to the checkbox
  checkbox.addEventListener("change", function() {
    // Update the label text based on the checkbox state
    const heartSpan = document.createElement("span");
    heartSpan.textContent = "🦋ꦿ"; // Unicode character for the heart emoji
    label.textContent = checkbox.checked ? `I ❤︎ U ${heartSpan.textContent}` : "Open me Dabi 😍";
  });
});