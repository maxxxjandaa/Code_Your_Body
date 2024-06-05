const myBtn = document.getElementById("help-btn");
const popUp = document.getElementById("popUp");
const closeBtn = document.getElementById("close-btn");

myBtn.addEventListener("click", () => {
  console.log("adfnasjikdhbna");
  popUp.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  console.log("adfnasjikdhbna");
  popUp.classList.remove("show");
});
