let fs = require("fs");
let axios = require("axios");

let songs = ["SongOne", "SongTwo"];
let durations = ["00:15", "00:05"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmPgHQJssYGpQQEEczqAJX3RYLbkoMUohWZEFTgPDyWD4P/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmPgHQJssYGpQQEEczqAJX3RYLbkoMUohWZEFTgPDyWD4P/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "NFTvana",
      year: "2035",
    },
  });
}

axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY": "<API-KEY>",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
