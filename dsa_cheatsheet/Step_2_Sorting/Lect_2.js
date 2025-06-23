// merge sort: O(nlogn) with extra space;
// const nums =  [7, 4, 1, 5, 3];
// function merge(arr,first,last,mid){
//     let temp=new Array(last-first+1);
//     let i=first,j=mid+1,k=0;
//     while(i<=mid && j<=last){
//         if(arr[i]<arr[j]) temp[k++] = arr[i++];
//         else temp[k++] = arr[j++];
//     }
//     while(i<=mid){
//         temp[k++] = arr[i++];
//     }while(j<=last){
//         temp[k++] = arr[j++];
//     }
//     let p=first;
//     for(let i=0;i<temp.length;i++){
//         arr[p++] = temp[i]; 
//     }
// }

// function divide(arr,first,last){
//     if(first>=last) return;
//     let mid = Math.floor((first+last)/2);
//     divide(arr,first,mid);
//     divide(arr,mid+1,last);
//     merge(arr,first,last,mid);
// }

// divide(nums,0,nums.length-1);
// console.log(nums);


// Quick Sort: O(nlogn) worse case:O(n^2),with no extra space

// function pivotIndexFn(arr,first,last){
// let pivot = arr[first];
// let i=first+1; 
// let j=last;
// while(i<=j){
//     while(i<=last && arr[i]<=pivot) i++;
//     while(j>first && arr[j]>=pivot) j--;
//     if(i<j) swap(arr,i,j)
// }
// swap(arr,j,first);
// return j
// }

// function quickSort(nums,first,last){
//     if(first>=last) return;
//     let pivotIndex = pivotIndexFn(nums,first,last);
//     quickSort(nums,first,pivotIndex-1);
//     quickSort(nums,pivotIndex+1,last)
// }

// function swap(arr,i,j){
// let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp;
// }

// const nums = [7, 4, 1, 5, 3];
// quickSort(nums,0,nums.length-1);
// console.log(nums);


// Bubble Sorting:
// const arr=[10,1,5,12,3];

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//         }
//     }
// }
// console.log(arr);
// bubble element is passed to next if condition is not met:

// Selection Sort:
// const arr=[1,10,5,12,9,1,10,12];
// let index;
// for(let i=0;i<arr.length;i++){
//     let min=arr[i];
//     index=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<min) {
//             index=j;
//             min=arr[j]
//         }
//     }
//     [arr[i],arr[index]]=[arr[index],arr[i]];
// }

// console.log(arr);

// const arr=[4,9,74,25,31,45]
// for(let i=1;i<arr.length;i++){
//     let j=i-1;
//     let key=arr[i];
//     while(j!==-1 && arr[j]>key ){
//             arr[j+1]=arr[j];
//             j--
//     }
//     arr[j+1]=key;
// }
// console.log(arr);


// const nums=[8,5,2,7,4,9,2];
// function mergeSort(){
// function divide(nums){
// if(nums.length<=1) return nums
// let mid=Math.floor((nums.length)/2);
// let mergeL=divide(nums.slice(0,mid));
// let mergeR=divide(nums.slice(mid));
// return merge(mergeL,mergeR);
// }
// function merge(left,right){
//     let temp=[];
//     let i=0,j=0,k=0;
//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]) temp[k++]=left[i++];
//         else if(left[i]===right[j]){
//             temp[k++]=left[i++];
//             j++;
//         }else temp[k++]=right[j++]
//     }
//     while(i<left.length){
//         temp[k++]=left[i++];
//     }
//     while(j<right.length){
//         temp[k++]=right[j++]
//     }
//     return temp
// }
// return divide(nums);
// }



// console.log(mergeSort());


const inp=[1,2,3,4];
let prod=1;
for(let i=0;i<inp.length;i++){
    prod = prod*inp[i];
}
let arr=[];
for(let i=0;i<inp.length;i++){
    let num=prod/inp[i];
    arr.push(num);
}
console.log(arr);
