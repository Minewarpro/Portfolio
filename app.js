const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

var video = document.getElementById("video");
var video_1 = document.getElementById("video_1");
var video_2 = document.getElementById("video_2");

timeoutId = 0;
lastvideo = "";


/*
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#060610';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function playAndPause () {

    if (video.paused){
        video.play();
    }
    else {
        video.pause();

    }
}

function play(video){
    video.play();
    if (lastvideo === video){
        clearTimeout(timeoutId);
    }
    lastvideo = video;
}

function pause(video, url){

    video.pause();

    timeoutId = setTimeout(function (){

        if (video.paused){
            video.setAttribute('src', url);
        }
        if (lastvideo.paused){
            video.setAttribute('src', url);
        }

    }, 100 );

}
    */

/* Test Slider */

  const btnLeft = document.querySelector(".carousel-btn.left");
  const btnRight = document.querySelector(".carousel-btn.right");
  const carousel = document.querySelector(".projects-carousel");

const card = document.querySelector('.project-card');

const cardStyle = getComputedStyle(card);
const cardWidth = card.offsetWidth;
const gap = parseInt(cardStyle.marginRight || 0) || 32; // espace entre les cartes

const scrollAmount = 3500;

document.getElementById('scroll-left').addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.getElementById('scroll-right').addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

function fixViewportHeight() {
  // Tente de forcer le navigateur à recalculer
  setTimeout(() => {
    const realHeight = window.innerHeight;
    console.log("Real height after delay:", realHeight);
    document.body.setAttribute('data-real-height', realHeight);
    // Ici tu pourrais relancer ton layout, recalculer des dimensions, etc.
  }, 100);
}

// À appeler après un léger scroll ou interaction
window.addEventListener("load", () => {
  // Scroll imperceptible pour forcer le recalcul
  window.scrollTo(0, 1);
  window.scrollTo(0, 0);

  fixViewportHeight();
});

function triggerReflow() {
  const temp = document.body.offsetHeight;
  document.body.style.transform = 'scale(1)'; // Un changement CSS mineur
}






const videos = document.querySelectorAll('.click-to-play');
    videos.forEach(video => {
        video.addEventListener('click', () => {
        if (video.paused) {
        video.play()
        } else {
        video.pause(); // optionnel : pour faire pause si cliqué à nouveau
        }
        });
    });
  




const wrappers = document.querySelectorAll('.video-wrapper');

  wrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const icon = wrapper.querySelector('.play-icon');

    // Affiche l'icône au début
    icon.style.display = 'block';

    wrapper.addEventListener('click', () => {
      if (video.paused) {
        icon.style.display = 'none';
      }
    });
    
    video.addEventListener('ended', () => {
      icon.style.display = 'block';
    });

    video.addEventListener('pause', () => {
      icon.style.display = 'block';
    });

    video.addEventListener('play', () => {
      icon.style.display = 'none';
    });
  });