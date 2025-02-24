//Request submitted page
//Copy Button
function CopyBtn() {
  const copyBtn = document.getElementById("copy-btn");
  copyBtn.addEventListener("click", () => {
    let copiedData = document.getElementById("copy-order-number").innerText;
    navigator.clipboard.writeText(copiedData);
    // Get the message element
    let copiedMsg = document.getElementById("copied");
    // Show the message
    copiedMsg.style.visibility = "visible";
    // Hide the message after 2 seconds
    setTimeout(() => {
      copiedMsg.style.visibility = "hidden";
    }, 2500);
  });
}
CopyBtn();
