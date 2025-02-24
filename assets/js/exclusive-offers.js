//Exclusive Offers Page
//Show More Button
function ShowMoreBtn() {
  const offersContainer = document.querySelector(
    ".exclusive-offers .container .offers"
  );
  const showMoreBtn = document.querySelector(
    ".exclusive-offers .container .show-more-btn"
  );
  console.log(showMoreBtn);
  const offersPerLoad = 6;
  const allOffers = Array.from(offersContainer.querySelectorAll(".offer"));
  //Hide extra offers when the page loads
  allOffers.forEach((offer, index) => {
    if (index >= offersPerLoad) {
      offer.classList.remove("show");
    } else {
      offer.classList.add("show");
    }
  });
  //Hide button if there aren't extra offers
  if (allOffers.length <= offersPerLoad) {
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.textContent = `عرض المزيد`;
  }
  //When clicking the "Show More" button
  showMoreBtn.addEventListener("click", function () {
    const isExpanded = offersContainer.classList.contains("expanded");
    if (!isExpanded) {
      //Show all offers
      allOffers.forEach((offer) => offer.classList.add("show"));
      offersContainer.classList.add("expanded");
      showMoreBtn.textContent = "عرض أقل";
      //Scroll to the first newly revealed offer
      const firstNewOffer = allOffers[offersPerLoad];
      if (firstNewOffer) {
        setTimeout(() => {
          firstNewOffer.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } else {
      //Hide extra offers
      allOffers.forEach((offer, index) => {
        if (index >= offersPerLoad) {
          offer.classList.remove("show");
        }
      });
      offersContainer.classList.remove("expanded");
      showMoreBtn.textContent = `عرض المزيد`;
      //Scroll to the last visible offer
      const lastVisibleOffer = allOffers[offersPerLoad - 1];
      if (lastVisibleOffer) {
        setTimeout(() => {
          lastVisibleOffer.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    }
  });
}
ShowMoreBtn();
//Offer Popup
function OfferPopup() {
  const offers = document.querySelectorAll(
    ".exclusive-offers .container .offers .offer "
  );
  const offerPopup = document.getElementById("offer-popup");
  const image = document.getElementById("offer-img");
  const name = document.getElementById("offer-name");
  const description = document.getElementById("offer-desc");
  const date = document.getElementById("offer-date");
  const price = document.getElementById("offer-price");
  offers.forEach(function (offer) {
    offer.addEventListener("click", function () {
      const offerImage = offer.querySelector("img").src;
      const offerName = offer.querySelector("h4").innerText;
      const offerDescription = offer.querySelector("p").innerText;
      const offerDate = offer.querySelector(".offer-date").innerText;
      const offerPrice = offer.querySelector(".price").innerText;
      offerPopup.style.display = "flex";
      image.src = offerImage;
      name.innerText = offerName;
      description.innerText = offerDescription;
      date.innerText = offerDate;
      price.innerText = offerPrice;
    });
  });
  window.addEventListener("click", function (e) {
    if (e.target === offerPopup) {
      offerPopup.style.display = "none";
    }
  });
}
OfferPopup();
//Contact Info Popup
function ContactInfoPopup() {
  const offerPopup = document.getElementById("offer-popup");
  const contactInfoPopup = document.getElementById("contact-info-popup");
  const getOfferBtn = document.querySelector(
    ".exclusive-offers .container .offers .offer-popup .offer-popup-content .price-getOffer .getOfferBtn"
  );

  getOfferBtn.addEventListener("click", function () {
    offerPopup.style.display = "none";
    contactInfoPopup.style.display = "flex";
  });
  window.addEventListener("click", function (e) {
    if (e.target === contactInfoPopup) {
      contactInfoPopup.style.display = "none";
    }
  });
}
ContactInfoPopup();
