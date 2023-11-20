document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offset =
          targetSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });

  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

const player = "";
let videoPlaying = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-container", {
    height: "315",
    width: "560",
    videoId: "TnGl01FkMMo",
    playerVars: {
      autoplay: 1,
      start: 6,
    },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    videoPlaying = true;
    setTimeout(
      () => (document.getElementById("explore-button").style.display = "block"),
      5000
    );
  }
}

const tabs = document.querySelectorAll(".tabs h3");
const tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

const enemySwiper = new Swiper(".enemy-swiper", {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const powerSwiper = new Swiper(".power-swiper", {
  direction: "vertical",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const image = document.querySelectorAll("#mario-background");
const threshold = 0.8;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "scale(1)";
        entry.target.style.opacity = 1;
      }
    });
  },
  { threshold }
);

image.forEach((img) => {
  observer.observe(img);
});
