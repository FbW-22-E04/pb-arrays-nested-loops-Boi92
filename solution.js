//1
for (let i = 0; i < 4; i++){
    let star = "";
    for (let y = 0; y <= i; y++){
        star += "*";
    }
    console.log(star)
}

//2
const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < ARR.length; i++){
    console.log(`row ${i}`);
    for (let y = 0; y < ARR[i].length; y++){
        console.log (`${ARR[i][y]}`);
    }
}

//3

let num = "";
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    num += i + " ";
  }
}
console.log(num);

let num2 = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 4; j++) {
    num2 += j + " ";
  }
}
console.log(num2);