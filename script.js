alert("Are You Ready for Halloween?!")

// === 🎃 HALLOWEEN COUNTDOWN ===
function updateCountdown() {
  const now = new Date().getTime();
  const halloweenDate = new Date("October 31, 2025 00:00:00").getTime();
  const distance = halloweenDate - now;

  if (distance < 0) {
    document.querySelector(".timebox").innerHTML = "<h2>🎃 It's Halloween! Boo!</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // run once immediately

// === 🕸️ Ensure Video Covers Background Fully ===
const bgVideo = document.getElementById("bg-video");
bgVideo.style.position = "fixed";
bgVideo.style.top = "0";
bgVideo.style.left = "0";
bgVideo.style.width = "100%";
bgVideo.style.height = "100%";
bgVideo.style.objectFit = "cover";
bgVideo.style.zIndex = "-1";