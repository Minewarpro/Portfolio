const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

var video = document.getElementById("video");
var video_1 = document.getElementById("video_1");
var video_2 = document.getElementById("video_2");

timeoutId = 0;
lastvideo = "";

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
