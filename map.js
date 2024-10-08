const cities = document.querySelectorAll(".city");
const countryImage = document.getElementById("countryImage");

cities.forEach((city) => {
  city.addEventListener("mouseover", () => {
    const cityName = city.getAttribute("data-city-name");
    const cityImage = city.getAttribute("data-image");

    // Change the image on hover
    countryImage.src = cityImage;

    // Display the city name (you can create a tooltip or just log it)
    console.log(`Hovering over: ${cityName}`);
  });

  city.addEventListener("mouseleave", () => {
    // Optionally reset the image or change it back
    countryImage.src = "default-image.jpg";
  });
});
