let readBotton = document.getElementById("read_botton");
let notfiNumber = document.getElementById("notif_number");
let reddot = document.querySelectorAll(".reddot");
let notifBox = document.querySelectorAll(".new");

function handleClick() {
  notfiNumber.innerHTML = 0;
  reddot.forEach((item) => {
    item.style.display = "none";
  });
  notifBox.forEach((item) => {
    item.style.backgroundColor = "var(--White)";
  });
}
