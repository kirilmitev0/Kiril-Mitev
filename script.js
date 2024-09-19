let burgerMenu = document.getElementById("burgerMenu");
let navBar = document.getElementById("navBar");
let card = document.getElementsByClassName("card");
let marketingBtn = document.getElementById("marketing-btn");
let programmingBtn = document.getElementById("programming-btn");
let designBtn = document.getElementById("design-btn");

function handleButtonClick(btn, cardClass) {
  btn.classList.toggle("clicked");

  if (btn !== marketingBtn) {
    marketingBtn.classList.remove("clicked");
  }
  if (btn !== programmingBtn) {
    programmingBtn.classList.remove("clicked");
  }
  if (btn !== designBtn) {
    designBtn.classList.remove("clicked");
  }

  for (let i = 0; i < card.length; i++) {
    if (card[i].classList.contains(cardClass)) {
      card[i].classList.remove("d-none");
    } else {
      card[i].classList.add("d-none");
    }

    if (
      !marketingBtn.classList.contains("clicked") &&
      !programmingBtn.classList.contains("clicked") &&
      !designBtn.classList.contains("clicked")
    ) {
      card[i].classList.remove("d-none");
    }
  }
}

function showMarketingBtns() {
  handleButtonClick(marketingBtn, "marketing-card");
}

function showProgrammingBtns() {
  handleButtonClick(programmingBtn, "programming-card");
}

function showDesignBtns() {
  handleButtonClick(designBtn, "design-card");
}

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

marketingBtn.addEventListener("click", showMarketingBtns);
programmingBtn.addEventListener("click", showProgrammingBtns);
designBtn.addEventListener("click", showDesignBtns);