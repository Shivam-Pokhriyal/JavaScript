/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let transformed={}
    for(let i=0; i< nums.length;i ++){
        let remaining = target-nums[i]
        if(transformed[remaining] !==undefined ){
            return ([transformed[remaining],i])
        }else{
            transformed[nums[i]]=i
        }
    }
    return []
};