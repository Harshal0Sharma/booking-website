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

const regionsData = {
  hokkaido: {
    title: "Hokkaido",
    description:
      "Hokkaido is known for its cold winters and beautiful natural landscapes.",
    images: [
      "assets/mapPhoto/Hokkaido/1.jpg",
      "assets/mapPhoto/Hokkaido/2.jpg",
      "assets/mapPhoto/Hokkaido/3.jpg",
      "assets/mapPhoto/Hokkaido/4.jpg",
    ],
  },
  tohoku: {
    title: "Tohoku",
    description:
      "Tohoku is famous for its hot springs, mountains, and scenic views.",
    images: [
      "assets/mapPhoto/Tohoku/1.jpg",
      "assets/mapPhoto/Tohoku/2.webp",
      "assets/mapPhoto/Tohoku/3.jpg",
      "assets/mapPhoto/Tohoku/4.jpg",
    ],
  },
  kanto: {
    title: "Kanto",
    description:
      "Kanto region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Kanto/1.jpg",
      "assets/mapPhoto/Kanto/2.jpg",
      "assets/mapPhoto/Kanto/3.webp",
      "assets/mapPhoto/Kanto/4.webp",
    ],
  },
  hokurikuShinetsu: {
    title: "Hokuriku Shinetsu",
    description:
      "Kanto region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/HoukuShinetsu/1.jpg",
      "assets/mapPhoto/HoukuShinetsu/2.jpeg",
      "assets/mapPhoto/HoukuShinetsu/3.jpg",
      "assets/mapPhoto/HoukuShinetsu/4.jpg",
    ],
  },
  tokai: {
    title: "Tokai",
    description:
      "Tokai region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Tokai/1.webp",
      "assets/mapPhoto/Tokai/2.jpg",
      "assets/mapPhoto/Tokai/3.jpg",
      "assets/mapPhoto/Tokai/4.webp",
    ],
  },
  kansai: {
    title: "Kansai",
    description:
      "Kansai region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Kansai/1.jpg",
      "assets/mapPhoto/Kansai/2.jpg",
      "assets/mapPhoto/Kansai/3.jpg",
      "assets/mapPhoto/Kansai/4.jpg",
    ],
  },
  chugoku: {
    title: "Chugoku",
    description:
      "Chugoku region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Chugoku/1.jpg",
      "assets/mapPhoto/Chugoku/2.jpg",
      "assets/mapPhoto/Chugoku/3.jpg",
      "assets/mapPhoto/Chugoku/4.jpg",
    ],
  },
  shikoku: {
    title: "Shikoku",
    description:
      "Shikoku region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Shikoku/1.jpeg",
      "assets/mapPhoto/Shikoku/2.jpg",
      "assets/mapPhoto/Shikoku/3.png",
      "assets/mapPhoto/Shikoku/4.jpg",
    ],
  },
  kyushu: {
    title: "Kyushu",
    description:
      "Kyushu region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Kyushu/1.webp",
      "assets/mapPhoto/Kyushu/2.jpg",
      "assets/mapPhoto/Kyushu/3.jpg",
      "assets/mapPhoto/Kyushu/4.jpg",
    ],
  },
  okinawa: {
    title: "Okinawa",
    description:
      "Okinawa region includes Tokyo and is a center of modern culture and business.",
    images: [
      "assets/mapPhoto/Okinawa/1.jpg",
      "assets/mapPhoto/Okinawa/2.webp",
      "assets/mapPhoto/Okinawa/3.jpg",
      "assets/mapPhoto/Okinawa/4.jpg",
    ],
  },
};

const mapRegions = document.querySelectorAll(".region");
let selectedRegion = null;

// Function to update region information
function updateRegionInfo(regionName) {
  const regionData = regionsData[regionName];

  // Update title and description
  document.getElementById("region-title").textContent = regionData.title;
  document.getElementById("region-description").textContent =
    regionData.description;

  // Update images in the region gallery
  const regionImages = document.querySelectorAll(".region-gallery img"); // Select the img tags

  regionImages.forEach((img, index) => {
    if (index < regionData.images.length) {
      img.src = regionData.images[index]; // Set the image source
    } else {
      img.src = ""; // Clear src if there are no more images
    }
  });
}

// Function to handle region hover and selection
function handleRegionHover(regionElement) {
  // Remove 'selected' class from previously selected region
  if (selectedRegion) {
    selectedRegion.classList.remove("selected");
  }

  // Add 'selected' class to the currently hovered region
  regionElement.classList.add("selected");
  selectedRegion = regionElement; // Update the selected region
}

// Event listeners for hover effect on regions
mapRegions.forEach((region) => {
  region.addEventListener("mouseover", function () {
    const regionName = this.getAttribute("data-region");
    updateRegionInfo(regionName);
    handleRegionHover(this); // Apply hover effect persistently
  });

  // Add click event to keep the region selected
  region.addEventListener("click", function () {
    const regionName = this.getAttribute("data-region");
    updateRegionInfo(regionName);
    handleRegionHover(this); // Keep this region highlighted
  });
});

// Automatically trigger hover for Hokkaido region when page loads
window.addEventListener("load", function () {
  const hokkaidoRegion = document.querySelector('[data-region="hokkaido"]');
  if (hokkaidoRegion) {
    updateRegionInfo("hokkaido");
    handleRegionHover(hokkaidoRegion); // Select Hokkaido region by default
  }
});

// sevene page start
