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

function pivotIndexFn(arr,first,last){
let pivot = arr[first];
let i=first+1; 
let j=last;
while(i<=j){
    while(i<=last && arr[i]<=pivot) i++;
    while(j>first && arr[j]>=pivot) j--;
    if(i<j) swap(arr,i,j)
}
swap(arr,j,first);
return j
}

function quickSort(nums,first,last){
    if(first>=last) return;
    let pivotIndex = pivotIndexFn(nums,first,last);
    quickSort(nums,first,pivotIndex-1);
    quickSort(nums,pivotIndex+1,last)
}

function swap(arr,i,j){
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}

const nums = [7, 4, 1, 5, 3];
quickSort(nums,0,nums.length-1);
console.log(nums);

