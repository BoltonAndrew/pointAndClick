let films = ["Ghostbusters", "Big", "Dogma", "Film"];

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

let filmCheck = () => {
  if (films[2] == "Ghostbusters") {
    console.log("Hooray it's Ghostbusters");
  } else {
    console.log("Oh no I wanted Ghostbusters");
  }
};

filmCheck();

// for (let i = 0; i < 6; i++) {
//   let randomNum = Math.floor(Math.random() * 30) + 1;
//   if (randomNum % 7 === 0) {
//     console.log(randomNum + " divisible by 7");
//   } else {
//     console.log(randomNum + " not divisible by 7");
//   }
// }

let iteration = 1;

while (iteration < 7) {
  let randomNum = Math.floor(Math.random() * 30) + 1;
  if (randomNum % 7 === 0) {
    console.log(randomNum + " divisible by 7");
  } else {
    console.log(randomNum + " not divisible by 7");
  }
  iteration += 1;
}
