
# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.

 

def found_the_index(nums,target):
    
    for i in range(len(nums)):
        
        if nums[i] ==  target:
            
            return i
        
        if nums[i] > target:
            
            return i
        
    
nums = [1, 3, 5, 6]
target = 2
print(found_the_index(nums,target))
            
            