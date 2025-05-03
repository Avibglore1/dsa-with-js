const nums = [2,5,8,9,12, 18,20,25,67,101,125];

let target = 120;
let first = 0;
let last = nums.length-1;
let mid;

function binarySearch(){
    while(first<=last){
        mid = Math.floor((first+last)/2);
        if(nums[mid]===target) return mid;
        else if(nums[mid]>target) last = mid-1;
        else first = mid+1;    
        }
        return undefined
}

const index = binarySearch();
if(index === undefined) console.log('Search Item not found');
else console.log('Search element available at index', index);




    