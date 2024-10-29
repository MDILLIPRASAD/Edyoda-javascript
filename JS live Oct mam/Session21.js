var songs = [
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/jain.jpg", 
        artistName: "Jain",
        songName: "Makeba", 
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3", 
        color: "#f5c63d",
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/ohland.jpg", 
        artistName: "Oh Land",
        songName: "Postpone the Bad", 
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song2.mp3", 
        color: "#afc5c3",
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/angele.jpg", 
        artistName: "Angel",
        songName: "La Loi de Murphy",
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song3.mp3",
        color: "#74c2dd",
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/ohland.jpg", 
        artistName: "Oh Land",
        songName: "Postpone the Bad", 
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song2.mp3", 
        color: "#afc5c3",
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/jain.jpg", 
        artistName: "Jain",
        songName: "Makeba", 
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3", 
        color: "#f5c63d",
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/angele.jpg", 
        artistName: "Angel",
        songName: "La Loi de Murphy",
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song3.mp3",
        color: "#74c2dd",
    },
   
];

const songListContainer = document.getElementById("song-list");

songs.map(song => {
  const songElement = document.createElement("div");
  songElement.classList.add("song");

  const imgElement = document.createElement("img");
  imgElement.src = song.img;
  songElement.appendChild(imgElement);

  const artistNameElement = document.createElement("p");
  artistNameElement.textContent = `Artist: ${song.artistName}`;
  songElement.appendChild(artistNameElement);

  const songNameElement = document.createElement("p");
  songNameElement.textContent = `Song: ${song.songName}`;
  songElement.appendChild(songNameElement);

  const audioElement = document.createElement("audio");
  audioElement.controls = true;
  audioElement.src = song.song;
  songElement.appendChild(audioElement);

  songListContainer.appendChild(songElement);
});

