// const key = "4cc43c9591f08a993e37d3de55e50a72";
// const imagePath = "https://image.tmdb.org/t/p/original/"
// fetch(
//   `https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1&api_key=${key}`
// ).then((res) => res.json()
// .then((data) => data.results
// .map((film)=>console.log(`${film.title} || ${film.vote_average.toFixed(1)}`))));

// let search = prompt("Enter film name: ")
// fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${key}&query=${search}`)
// .then((res)=>res.json().then((data)=>console.log(data)))

// DOM
// console.log(document);

// let paragraph = document.getElementById("text");
// console.log(paragraph);
// console.log(paragraph.innerText);
// console.log(paragraph.innerHTML);
// console.log(paragraph.textContent);

// let paragraph = document.getElementsByClassName("demo");
// let paragraph = document.querySelectorAll(".demo");
// let paragraph = document.querySelector("#text");
// console.log(paragraph[0].textContent);

// let btn = document.getElementById("btn");
// let count = 1;
// btn.addEventListener("click", () => {
//   // console.log("Hello world");
//   btn.textContent = `Click me ${count++}`;
// });

// let btn = document.getElementById("btn");
// let check = true;
// btn.addEventListener("click", () => {
//   btn.textContent = check ? "Clicked !!!" : "Click me";
//   check = !check;
// });
