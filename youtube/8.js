// process.stdout.write("hello");
// process.stdout.write(' World');

let prompt = require("prompt-sync")();
// let a = prompt("Enter a number ");
// process.stdout.write(a);

let n = Number(prompt("Enter a number "));
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }


// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j+" ");
//     }
//     console.log()
// }


// for(let i=65;i<(65+n);i++){
//     for(let j=65;j<=i;j++){
//         process.stdout.write(String.fromCharCode(j) + " ");
//     }
//     console.log();
// }

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n-i+1);j++){
//         process.stdout.write('*'+" ");
//     }
//     console.log();    
// }


// for(let i=1;i<=n;i++){
//     process.stdout.write(" ".repeat(n-i) + "* ".repeat(i));
//     console.log();    
// }

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i===j || i+j===(n+1)){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();    
// }


// for(let i=1;i<=n;i++){
//     for(let j=1;j<=2*n-1;j++){
//         if(i===j || i+j===2*n){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log();    
// }