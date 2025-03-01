//Drop Down List
function DropDownList() {
  let dropDownToggle = document.getElementById("drop-down-toggle");
  let dropDownMenu = document.getElementById("drop-down-menu");
  dropDownToggle.addEventListener("click", (event) => {
    dropDownMenu.style.display =
      dropDownMenu.style.display === "block" ? "none" : "block";
  });
  document.addEventListener("click", (event) => {
    if (
      !dropDownToggle.contains(event.target) &&
      !dropDownMenu.contains(event.target)
    ) {
      dropDownMenu.style.display = "none";
    }
  });
}



DropDownList();
//Burger Menu
function BurgerMenu() {
  document
    .getElementById("Burger-menuToggle")
    .addEventListener("click", function () {
      document.getElementById("sidebar").classList.add("show");
    });
  document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("show");
  });
  document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("sidebar");
    let menuToggle = document.getElementById("Burger-menuToggle");
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      sidebar.classList.remove("show");
    }
  });
}
BurgerMenu();


const popup = document.getElementById('whatsappContact');
    
function togglePopup() {
  popup.classList.toggle('show');
}

// Initial display
setTimeout(() => {
  popup.classList.add('show');
}, 500);

// Set up the toggle interval
setInterval(() => {
  togglePopup();
  
  // Show it again after 5 seconds
  setTimeout(() => {
    togglePopup();
  }, 5000);
  
}, 10000); 