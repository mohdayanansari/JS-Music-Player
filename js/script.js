let songIndex = 0;
let audioElement = new Audio("../songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Salame-e-Ishq",
    filePath: "../songs/10.mp3",
    coverPath: "../assets/covers/10.jpg",
  },
  {
    songName: "sobg2",
    filePath: "../songs/2.mp3",
    coverPath: "../assets/covers/2.jpg",
  },
  {
    songName: "song 3",
    filePath: "../songs/3.mp3",
    coverPath: "../assets/covers/3.jpg",
  },
  {
    songName: "song 4",
    filePath: "../songs/4.mp3",
    coverPath: "../assets/covers/4.jpg",
  },
  {
    songName: "song 5",
    filePath: "../songs/5.mp3",
    coverPath: "../assets/covers/5.jpg",
  },
  {
    songName: "song 6",
    filePath: "../songs/6.mp3",
    coverPath: "../assets/covers/6.jpg",
  },
  {
    songName: "song 7",
    filePath: "../songs/7.mp3",
    coverPath: "../assets/covers/7.jpg",
  },
  {
    songName: "song 8",
    filePath: "../songs/8.mp3",
    coverPath: "../assets/covers/8.jpg",
  },
  {
    songName: "song 9",
    filePath: "../songs/9.mp3",
    coverPath: "../assets/covers/9.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("sognsItemPlay")).forEach(
    (element) => {
      element.target.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `../songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
// audioElement.play();

// Handle Play/pause on click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// masterPause.addEventListener("click", () => {
//     if(audioElement.)
// })

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  progess = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progess;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// next

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `../songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

// previous

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `../songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
