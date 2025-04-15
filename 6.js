// const arr = [1,5,8,9,12];
// [5,8,9,12,1];>>>>>>>>>>>>>>Left roation by 1
// let temp = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] =temp; 
// console.log(arr)


// [12,1,5,8,9]>>>>>>>>>>>right rotation by 1;
// let temp = arr[arr.length-1]
// for(let i=arr.length-1;i>=1;i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = temp;

// console.log(arr);


// left rotation by k element
// let k = prompt("Enter number of times array to be rotated");
// k = k%arr.length;

// for(let j=0;j<k;j++){
//     let temp = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] =temp; 
// }

// console.log(arr);


// right rotation by k element

// const arr = [1,5,8,9,12];
// let k = prompt("Enter number of times element to be rotated right");

// k = k%arr.length;

// for(let j=0;j<k;j++){
//     let temp = arr[arr.length-1]
//     for(let i=arr.length-1;i>=1;i--){
//     arr[i] = arr[i-1];
// }
//     arr[0] = temp;
// }



// 2nd approach of left rotaion by k element by formula
// const arr = [1,5,8,9,12];
// let temp = [];
// const k = Number(prompt("Enter no of times element to be rotated left"))
// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }

// console.log(temp);




// right rotation by k element by formula
// const arr = [1,5,8,9,12];
// let temp = new Array(arr.length);
// const k = Number(prompt("Enter no of times element to be rotated right"))
// for(let i=0;i<arr.length;i++){
//     temp[(i+k)%arr.length] =arr[i]
// }

// console.log(temp);



// 3rd approach -reverse block algorithm-left rotation

// let length_of_array = Number(prompt("Enter length of array"));
// let arr = new Array(length_of_array);
// for(let i=0;i<length_of_array;i++){
//     arr[i] = Number(prompt("Enter elements in an array"));
// }
// let k = Number(prompt('Enter value of k'));
// k=k%length_of_array;
// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// console.log((arr));

// function reverse(i,j){
//     while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--
//     }  
// }


// 3rd approach -right rotaion w/o extra space and w/o time complexity of n2;
const length_of_Array = Number(prompt("Enter length of the array"));
let arr = new Array(length_of_Array);
for(let i=0;i<length_of_Array;i++){
    arr[i] = Number(prompt("Enter elements in an array"));
    if(arr[i]=== null){
        break;
    }
}
let k = Number(prompt("Enter number of rotation to be done"));
k = k%length_of_Array;

reverse(0,arr.length-1);
reverse(0,k-1);
reverse(k,arr.length-1);
console.log(arr);

function reverse(i,j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--
    }
}