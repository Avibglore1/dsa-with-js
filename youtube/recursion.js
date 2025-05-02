// print n to 1;


let start = 1,end=10
function print(start,end){
    if(start===end){
        console.log(end);
        return
    }
console.log(end);
print(start,end-1)
}

print(start,end);