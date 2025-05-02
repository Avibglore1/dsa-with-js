// print n to 1;


// let start = 1,end=10
// function print(start,end){
//     if(start===end){
//         console.log(end);
//         return
//     }
// console.log(end);
// print(start,end-1)
// }

// print(start,end);

// from 1 to n:

let start = 1;
let end = 10;
function print(start,end){
    if(start===end){
        console.log(start);
        return
    }
    console.log(start);
    print(start+1,end)   
}

print(start,end)