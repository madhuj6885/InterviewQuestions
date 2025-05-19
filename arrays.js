// const n = [1, 1, 3,2,3,4,  4, 8];


let n=50;
const primeNumbers = [];
for(let i=1; i<=n; i++) {
    let count =0;


    for(let j=1; j<=i; j++){
        if(i%j === 0) {
        count++;
    }

    }
   
    if(count === 2) {
primeNumbers.push(i);
    }
}
console.log(primeNumbers);







// for(let i=0; i<n.length; i++){

//     for(let j=n.length-1; j>=0; j--){

//         let temp = n[i];
//         n[i] =n[j];
//         n[j]=temp;

//     }
// }

// console.log(n);

// let max = Math.max(...n);
// console.log(`Max number is`+ max);

// console.log(`Index is :` + n.indexOf(max));
// let min = Math.min(...n);
// console.log(`Max number is`+ min);

// console.log(`Index is :` + n.indexOf(min));

// console.log(n.sort((a,  b) => b-a));
// const u = n.filter((num, index, arr) =>{
//     return arr.indexOf(num) === index;
// })
// console.log(u);
//  n.filter((num, index, arr) =>{
//     console.log(num, arr.indexOf(num));
//         console.log(num, arr.lastIndexOf(num))

//     // return arr.indexOf(num) === arr.lastIndexOf(num);
// })
// console.log(u);

