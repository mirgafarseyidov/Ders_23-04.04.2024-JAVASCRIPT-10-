// let btn = document.getElementById("btn");
// let count = 1;
// btn.addEventListener("click", () => {

//     console.log("Hello world");

//     if (count === 10) {
//         count = 1;
//     }

//     btn.textContent = `Click me ${count++}`;
// });




// let btn = document.getElementById("btn");
// let count = 1;
// let increasing = true;

// btn.addEventListener("click", () => {
//     console.log("Hello world");

//     if (increasing) {
//         if (count === 10) {
//             increasing = false;
//         }
//         btn.textContent = `Click me ${count++}`;
//     } else {
//         if (count === 1) {
//             increasing = true;
//         }
//         btn.textContent = `Click me ${count--}`;
//     }
// });


/*
İkinci metod

let btn = document.getElementById("btn");
let count = 1;
let increasing = true;

btn.addEventListener("click", () => {
    console.log("Hello world");

    if (increasing) {
        // Artan modda dəyəri artır
        btn.textContent = `Click me ${count++}`;

        // 10 çatanda artana keç
        if (count === 11) {
            increasing = false;
            count = 9; // 10'dan geriye gitmek için 9'dan devam edecek
        }
    } else {
        // Azalan modda azalmaga davam edir
        btn.textContent = `Click me ${count--}`;

        //  1 ə çatanda artana keç
        if (count === 0) {
            increasing = true;
            count = 2; // 1'den devam etmek için 2'den başlayacak
        }
    }
});

*/



/* üçüncü metod   elave
let btn= document.getElementById('btn')
let say=0
let yox=0
btn.addEventListener("click",()=>{yox<10?(say++,yox++):say--,say==1? yox=say:yox,btn.textContent=Clicked ${say}})
*/