document.getElementById("menu-btn").onclick = function () {
  const navbar = document.getElementById("scrollingNavbar");
  navbar.classList.toggle("active");
};

const video = document.getElementById("background-video");
const thumbnails = document.querySelectorAll(".thumbnail");
const videoTitle = document.getElementById("video-title");
const videoDescription = document.getElementById("video-description");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    // Change video source
    const videoSrc = this.getAttribute("data-video");
    video.querySelector("source").src = videoSrc;
    video.load();
    video.play();

    // Change the text (title and description)
    const newTitle = this.getAttribute("data-title");
    const newDescription = this.getAttribute("data-description");
    videoTitle.textContent = newTitle;
    videoDescription.textContent = newDescription;
  });
});

const cardRow = document.querySelector(".cardsRow");
let scrollPosition = 0;
const cardWidth = 220; // Width of a card including margin
const visibleCards = 4; // Number of visible cards at a time (changed to 4)
const totalCards = 12; // Total number of cards
const maxScrollPosition = cardWidth * (totalCards - visibleCards); // Max scroll width

function scrollNext() {
  // Move to the next set of cards or loop back to the start
  if (scrollPosition < maxScrollPosition) {
    scrollPosition += cardWidth;
  } else {
    scrollPosition = 0; // Loop back to the first card
  }
  cardRow.style.transform = `translateX(-${scrollPosition}px)`;
}

function scrollPrev() {
  // Move to the previous set of cards or loop back to the end
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
  } else {
    scrollPosition = maxScrollPosition; // Loop to the last set of cards
  }
  cardRow.style.transform = `translateX(-${scrollPosition}px)`;
}

// sevene page start
// Get all regions in the SVG
const regions = document.querySelectorAll(".svg-region");
const leftContent = document.getElementById("leftContentMap");

// Add event listener for mouseover and mouseout to each region
regions.forEach((region) => {
  // On mouseover (hover), display the image and text
  region.addEventListener("mouseover", function () {
    const imageSrc = this.getAttribute("data-image");
    const text = this.getAttribute("data-text");

    // Set content on the left side
    leftContent.innerHTML = `
  <img src="${imageSrc}" alt="Image related to the region">
  <p>${text}</p>
`;
  });

  // On mouseout, clear the content or reset it
  region.addEventListener("mouseout", function () {
    leftContent.innerHTML = `<p>Hover over a region to display information here.</p>`;
  });
});

function addGroupHoverEffect(className) {
  const groupPaths = document.querySelectorAll("." + className);

  groupPaths.forEach((path) => {
    path.addEventListener("mouseover", () => {
      groupPaths.forEach((p) => p.classList.add("hovered"));
    });
    path.addEventListener("mouseout", () => {
      groupPaths.forEach((p) => p.classList.remove("hovered"));
    });
  });
}

// Apply the function to the "tohoku" group
addGroupHoverEffect("hokkaido");
addGroupHoverEffect("tohoku");
addGroupHoverEffect("hokurikuShinetsu");
addGroupHoverEffect("kanto");
addGroupHoverEffect("tokai");
addGroupHoverEffect("kansai");
addGroupHoverEffect("chugoku");
addGroupHoverEffect("shikoku");
addGroupHoverEffect("kyushu");
// seven page end
