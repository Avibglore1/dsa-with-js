// Majority Element-I:

const arr = [2,2,1,1,1,2,2];
let majorityItem = arr[0];
let count=1;
for(let i=1;i<arr.length;i++){
    if(majorityItem === arr[i]){
        count++;
    }else{
        if(count===0){
            majorityItem = arr[i];
            count=1;
        }else{
            count--;
        }
    }
}
console.log('majorityItem',majorityItem);
