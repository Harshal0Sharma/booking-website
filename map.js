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
      "assets/mapPhoto/Tokai/1.jpg",
      "assets/mapPhoto/Tokai/1.jpg",
      "assets/mapPhoto/Tokai/1.webp",
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
      "assets/mapPhoto/Okinawa/1.jpg",
      "assets/mapPhoto/Okinawa/1.jpg",
    ],
  },
};

const mapRegions = document.querySelectorAll(".region");
const regionTitle = document.getElementById("region-title");
const regionDescription = document.getElementById("region-description");
const regionImages = document.querySelectorAll(".region-image");

mapRegions.forEach((region) => {
  region.addEventListener("mouseover", function () {
    const regionName = this.getAttribute("data-region");
    const regionData = regionsData[regionName];

    // Update title and description
    regionTitle.textContent = regionData.title;
    regionDescription.textContent = regionData.description;

    // Update images
    regionImages.forEach((img, index) => {
      img.src = regionData.images[index];
    });
  });

  region.addEventListener("mouseout", function () {
    // Reset title and description when mouse leaves
    regionTitle.textContent = "Hover over a region";
    regionDescription.textContent =
      "Region information will appear here when you hover over a region.";

    // Reset images
    regionImages.forEach((img) => {
      img.src = "japan.svg";
    });
  });
});
