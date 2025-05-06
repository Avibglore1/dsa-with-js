// maxProductinasubarray:
const nums = [-5, 0, -2];
let maxProduct = nums[0];
let currentMax = nums[0];
let currentMin = nums[0];
let temp;
for(let i=1;i<nums.length;i++){
    let num = nums[i];
    if(num<0){
        temp = currentMax;
        currentMax = currentMin;
        currentMin = temp;    
        // [currentMax,currentMin] = [currentMin,currentMax]
    }
    currentMax = Math.max(num,currentMax * num);
    currentMin = Math.min(num,currentMin * num);
    maxProduct = Math.max(maxProduct,currentMax);
}
console.log('maxProduct',maxProduct);
