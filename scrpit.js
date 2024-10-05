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
