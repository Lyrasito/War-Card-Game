export const cards = [
  {
    value: 1,
    img: "./JPEG/AH.jpg",
  },
  {
    value: 1,
    img: "./JPEG/AD.jpg",
  },
  {
    value: 1,
    img: "./JPEG/AC.jpg",
  },
  {
    value: 1,
    img: "./JPEG/AS.jpg",
  },
  {
    value: 2,
    img: "./JPEG/2H.jpg",
  },
  {
    value: 2,
    img: "./JPEG/2D.jpg",
  },
  {
    value: 2,
    img: "./JPEG/2C.jpg",
  },
  {
    value: 2,
    img: "./JPEG/2S.jpg",
  },
  {
    value: 3,
    img: "./JPEG/3H.jpg",
  },
  {
    value: 3,
    img: "./JPEG/3D.jpg",
  },
  {
    value: 3,
    img: "./JPEG/3C.jpg",
  },
  {
    value: 3,
    img: "./JPEG/3S.jpg",
  },
  {
    value: 4,
    img: "./JPEG/4H.jpg",
  },
  {
    value: 4,
    img: "./JPEG/4D.jpg",
  },
  {
    value: 4,
    img: "./JPEG/4C.jpg",
  },
  {
    value: 4,
    img: "./JPEG/4S.jpg",
  },
  {
    value: 5,
    img: "./JPEG/5H.jpg",
  },
  {
    value: 5,
    img: "./JPEG/5D.jpg",
  },
  {
    value: 5,
    img: "./JPEG/5C.jpg",
  },
  {
    value: 5,
    img: "./JPEG/5S.jpg",
  },
  {
    value: 6,
    img: "./JPEG/6H.jpg",
  },
  {
    value: 6,
    img: "./JPEG/6D.jpg",
  },
  {
    value: 6,
    img: "./JPEG/6C.jpg",
  },
  {
    value: 6,
    img: "./JPEG/6S.jpg",
  },
  {
    value: 7,
    img: "./JPEG/7H.jpg",
  },
  {
    value: 7,
    img: "./JPEG/7D.jpg",
  },
  {
    value: 7,
    img: "./JPEG/7C.jpg",
  },
  {
    value: 7,
    img: "./JPEG/7S.jpg",
  },
  {
    value: 8,
    img: "./JPEG/8H.jpg",
  },
  {
    value: 8,
    img: "./JPEG/8D.jpg",
  },
  {
    value: 8,
    img: "./JPEG/8C.jpg",
  },
  {
    value: 8,
    img: "./JPEG/8S.jpg",
  },
  {
    value: 9,
    img: "./JPEG/9H.jpg",
  },
  {
    value: 9,
    img: "./JPEG/9D.jpg",
  },
  {
    value: 9,
    img: "./JPEG/9C.jpg",
  },
  {
    value: 9,
    img: "./JPEG/9S.jpg",
  },
  {
    value: 10,
    img: "./JPEG/10H.jpg",
  },
  {
    value: 10,
    img: "./JPEG/10D.jpg",
  },
  {
    value: 10,
    img: "./JPEG/10C.jpg",
  },
  {
    value: 10,
    img: "./JPEG/10S.jpg",
  },
  {
    value: 11,
    img: "./JPEG/JH.jpg",
  },
  {
    value: 11,
    img: "./JPEG/JD.jpg",
  },
  {
    value: 11,
    img: "./JPEG/JC.jpg",
  },
  {
    value: 11,
    img: "./JPEG/JS.jpg",
  },
  {
    value: 12,
    img: "./JPEG/QH.jpg",
  },
  {
    value: 12,
    img: "./JPEG/QD.jpg",
  },
  {
    value: 12,
    img: "./JPEG/QC.jpg",
  },
  {
    value: 12,
    img: "./JPEG/QS.jpg",
  },
  {
    value: 13,
    img: "./JPEG/KH.jpg",
  },
  {
    value: 13,
    img: "./JPEG/KS.jpg",
  },
  {
    value: 13,
    img: "./JPEG/KC.jpg",
  },
  {
    value: 13,
    img: "./JPEG/KD.jpg",
  },
];

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
