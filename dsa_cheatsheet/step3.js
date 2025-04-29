// largest number:
// let nums = [3,8,8,4,56,56];
// let max = nums[0];
// for(let i=1;i<nums.length;i++){
//      if(nums[i]>max) max=nums[i];
// }

// console.log('maximum',max);


// let arr = [2,23,45,65,365,45];
// if(arr.length<2) console.log(-1);
// else{
//      let max = arr[0];
// let smax = -Infinity;
// for(let i=0;i<arr.length;i++){
//      if(arr[i]>max){
//           smax = max;
//           max = arr[i];
//      }else if(arr[i]>smax && arr[i]<max){
//           smax = arr[i];
//      }
// }
// if(smax === -Infinity) console.log(-1);
// else console.log('secondmaximum',smax);
// }


// initiallysortedandrotated:
const arr = [1,2,3];
let count=0;

for(let i=0;i<arr.length;i++){
     if(arr[i]<arr[(i+1)%arr.length]){
          count++;
     }
}
if(count<=1) console.log(true);
else console.log(false);


