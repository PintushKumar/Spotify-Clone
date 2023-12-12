const music = new Audio("audio/25.m4a");
// music.play();

const songs = [
  {
    id: "1",
    songName:
      'Arjit Singh<br><div class="subtitle"> Chal tere Isq me Par Jate Hai. </div>',
    poster: "img/1..jpg",
  },
  {
    id: "2",
    songName:
      'Ae Dil Hai Mushkil<br><div class="subtitle"> Arjit Singh </div>',
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName:
      'Najar Ke Samne Jigar ke pass <br><div class="subtitle"> Kumar Sanu </div>',
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName:
      'Main Duniya Bhula Doonga <br><div class="subtitle">Kumar Sanu</div>',
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName:
      'Tu Jo Hans Hans Ke sanam<br><div class="subtitle">Udit Narayan</div> ',
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName:
      ' Main Nikla Gaddi Leke<br><div class="subtitle"> Udit Narayan </div>',
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName:
      'Hamko Hami se Chura Lo<br><div class="subtitle"> Lata Mangeshkar </div>',
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName:
      'Kinna Sona Desh Hai Mera <br><div class="subtitle"> Lata Mangeshkar </div>',
    poster: "img/8.jpg",
  },
  {
    id: '9',
    songName:
      ' Chura ke dil Mera Goriya Chali<br><div class="subtitle">Alka Yagnik</div>',
    poster: "img/9.jpg",
  },
  {
    id: '10',
    songName:
      'Jita Tha Jiske Liye <br><div class="subtitle"> Alka Yagnik </div>',
    poster: "img/10.jpg",
  },
  {
    id: '11',
    songName:
      'Taron Ke Sahar Me <br><div class="subtitle"> Neha Kakkar </div>',
    poster: "img/11.jpg",
  },
  {
    id: '12',
    songName:
      'Dheeme Dheeme <br><div class="subtitle"> Neha Kakkar</div>',
    poster: "img/12.jpg",
  },
  {
    id: '13',
    songName:
      'Dheeme Dheeme  <br><div class="subtitle"> Himesh Reshmiya</div>',
    poster: "img/13.jpg",
  },
  {
    id: '14',
    songName:
      'Kyon Ki Itna Pyar <br><div class="subtitle"> Himesh Reshamiya </div>',
    poster: "img/14.jpg",
  },
  {
    id: '15',
    songName:
      ' Tera Fitur <br><div class="subtitle"> Arjit Singh</div>',
    poster: "img/15.jpg",
  },
  {
    id: '16',
    songName:
      'Tip Tip Barsa Pani  <br><div class="subtitle">Udit Narayan Alka Yagnik</div>',
    poster: "img/16.jpg",
  },

  {
    id: '17',
    songName:
      'Kabhi Jo Badal Barse  <br><div class="subtitle"> Arjit Singh</div>',
    poster: "img/17.jpg",
  },
  {
    id: '18',
    songName:
      'Gali Gali me Phirta Hai tu Kyu Ban ke Banjara  <br><div class="subtitle"> Neha Kakkar </div>',
    poster: "img/18.jpg",
  },
  {
    id: '19',
    songName:
      'Param Sundari <br><div class="subtitle"> Shreya Ghosal</div>',
    poster: "img/19.jpg",
  },
  {
    id: '20',
    songName:
      'Shiv Tandav<br><div class="subtitle"> Shreya Ghosal</div>',
    poster: "img/20.jpg",
  },
  {
    id: '21',
    songName:
      'Tera Ban Jaunga   <br><div class="subtitle"> Tulsi Kumar</div>',
    poster: "img/21.jpg",
  },
  {
    id: '22',
    songName:
      'Mai Phir bhi tumko Chaunga <br><div class="subtitle"> Arjit Singh</div>',
    poster: "img/22.jpg",
  },
  {
    id: '23',
    songName:
      'O Berdardiya   <br><div class="subtitle"> Arjit Singh</div>',
    poster: "img/23.jpg",
  },
  {
    id: '24',
    songName:
      'Hamko Tumse Pyar Hai  <br><div class="subtitle"> Alka Yagnik Kumar Sanu</div>',
    poster: "img/24.jpg",
  },
  {
    id: '25',
    songName:
      'Desh Mere Teri Shan pe Sadke  <br><div class="subtitle"> Arjit Singh</div>',
    poster: "img/25.jpg",
  },
  {
    id: '26',
    songName:
      'Teri Mitti  <br><div class="subtitle"> B Praak</div>',
    poster: "img/26.jpg",
  },
  {
    id: '27',
    songName:
      'Hum Yar Hai Tumhare   <br><div class="subtitle"> Alka Yagnik Kumar Sanu</div>',
    poster: "img/27.jpg",
  },
  {
    id: '28',
    songName:
      'Meri Trah Tum bhi Kabhi <br><div class="subtitle"> Alka Yagnik </div>',
    poster: "img/28.jpg",
  },
  {
    id: '29',
    songName:
      'Kasam Kha ke Kaho Muskra ke Kaho <br><div class="subtitle"> Alka Yagnik Kumar Sanu</div>',
    poster: "img/29.jpg",
  },
  {
    id: '30',
    songName:
      'Bam Bam Bhole  <br><div class="subtitle"> Virsus</div>',
    poster: "img/24.jpg",
  }
];


songs.forEach((song, i) => {
  let songItem = document.getElementsByClassName('songItem')[i];
  let imgElement = songItem.getElementsByTagName('img')[0];
  let h5Element = songItem.getElementsByTagName('h5')[0];
  imgElement.src = song.poster;
  h5Element.innerHTML=songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click' ,()=>{
  if(music.paused || music.currentTime<=0){
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
  }else{
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
  }
});


const makesAllPlays = () =>{
  Array.from(document.getElementsByClassName('playListPlay')).forEach((ele)=>{
    ele.classList.add('bi-play-circle-fill');
    ele.classList.remove('bi-pause-circle-fill');
  })
}
// for songs background whose play song
const makeAllBackground = () =>{
  Array.from(document.getElementsByClassName('songItem')).forEach((ele)=>{
    ele.style.backgroundColor='rgb(105,105,105,.0)'; 
  });
}


let index =0;
let poster_master_play = document.getElementById('poster-master-play');
let title = document.getElementById('title');

// if we want to see how many music present then use this
let musicCount = Array.from(document.getElementsByClassName('songItem')).length; 
// console.log(musicCount);

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
  e.addEventListener('click' ,(el)=>{

    let abc = el.target.id;
    // console.log(abc);
    index=abc;
 
    // getting musics through index  means whatever id have 
    // in playlist array so we can access that element using this index.
    music.src=`audio/${index}.m4a`;
    
    // poster of the song 
    poster_master_play.src = `img/${index}.jpg`;

    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    // getting the songTitles by iterating songs arr if any time elements id== index means this is the title
    let songTitles = songs.filter((ele)=>{
      return ele.id == index;
    });

    songTitles.forEach(eles =>{
      // let {songName , poster} =  eles;  we can also get poster at time
      let {songName } =  eles;
      title.innerHTML = songName;
      // poster_master_play.src =poster; then setting the poster in the master play
    });

    makeAllBackground(); 
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroundColor = 'rgb(105,105,105,.1)';

    // making all other plays to pause when one song is playing
    makesAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
  });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
  let music_curr_Time = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  let formattedSec1 = sec1 < 10 ? `0${sec1}` : `${sec1}`;
  currentEnd.innerText = `${min1}:${formattedSec1}`;

  let min2 = Math.floor(music_curr_Time / 60);
  let sec2 = Math.floor(music_curr_Time % 60);
  let formattedSec2 = sec2 < 10 ? `0${sec2}` : `${sec2}`;
  currentStart.innerText = `${min2}:${formattedSec2}`;

  let progressBar = (music_curr_Time / music_dur) * 100;
  seek.value = progressBar;

  bar2.style.width = `${progressBar}%`;
  dot.style.left = `${progressBar}%`;
});


seek.addEventListener('change' , ()=>{
  music.currentTime = (seek.value * music.duration )/100;
});


let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar')[0];
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('input', () => {
  if (vol.value <= 0) {
    vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-off-fill');
  } else if (vol.value > 0 && vol.value <= 50) {
    vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-off-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-down-fill');
  } else {
    vol_icon.classList.remove('bi-volume-down-fill', 'bi-volume-off-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

vol_icon.addEventListener('click', () => {
  if (music.volume === 0) {
    // If already muted, unmute
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
    vol_icon.classList.add('bi-volume-up-fill');
    vol.value = 100; // Reset volume to maximum
    vol_bar.style.width = '100%';
    vol_dot.style.left = '100%';
    music.volume = 1; // Set volume to full (1)
  } else {
    // If not muted, mute
    vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
    vol.value = 0; // Set volume to zero
    vol_bar.style.width = '0%';
    vol_dot.style.left = '0%';
    music.volume = 0; // Set volume to zero
  }
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click' , ()=>{
    index -=1;
    if(index<1){
       index = Array.from(document.getElementsByClassName('songItem')).length; 
    }
    // getting musics through index  means whatever id have 
    // in playlist array so we can access that element using this index.
    music.src=`audio/${index}.m4a`;
    
    // poster of the song 
    poster_master_play.src = `img/${index}.jpg`;

    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    // getting the songTitles by iterating songs arr if any time elements id== index means this is the title
    let songTitles = songs.filter((ele)=>{
      return ele.id == index;
    });

    songTitles.forEach(eles =>{
      // let {songName , poster} =  eles;  we can also get poster at time
      let {songName } =  eles;
      title.innerHTML = songName;
      // poster_master_play.src =poster; then setting the poster in the master play
    });

    makeAllBackground(); 
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroundColor = 'rgb(105,105,105,.1)';

    // making all other plays to pause when one song is playing
    makesAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


next.addEventListener('click' , ()=>{
    index++;
    if(index>musicCount){
       index = 1; 
    }
    // getting musics through index  means whatever id have 
    // in playlist array so we can access that element using this index.
    music.src=`audio/${index}.m4a`;
    
    // poster of the song 
    poster_master_play.src = `img/${index}.jpg`;

    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    // getting the songTitles by iterating songs arr if any time elements id== index means this is the title
    let songTitles = songs.filter((ele)=>{
      return ele.id == index;
    });

    songTitles.forEach(eles =>{
      // let {songName , poster} =  eles;  we can also get poster at time
      let {songName } =  eles;
      title.innerHTML = songName;
      // poster_master_play.src =poster; then setting the poster in the master play
    });

    makeAllBackground(); 
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroundColor = 'rgb(105,105,105,.1)';

    // making all other plays to pause when one song is playing
    makesAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});






let popSongLeft = document.getElementById("pop-song-left");
let popSongRight = document.getElementById("pop-song-right");
let popSongContainer = document.getElementsByClassName("pop-song")[0]; // Assuming there's only one element with class 'pop-song'

popSongRight.addEventListener("click", () => {
  popSongContainer.scrollLeft += 330; // Adjust the scroll value as needed
});

popSongLeft.addEventListener("click", () => {
  popSongContainer.scrollLeft -= 430; // Adjust the scroll value as needed
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artist = document.getElementsByClassName("Artist")[0]; // Assuming there's only one element with class 'pop-song'

pop_art_right.addEventListener("click", () => {
  Artist.scrollLeft += 330; // Adjust the scroll value as needed
});

pop_art_left.addEventListener("click", () => {
  Artist.scrollLeft -= 430; // Adjust the scroll value as needed
});
