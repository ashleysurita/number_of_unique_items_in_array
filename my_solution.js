function numUniques(array) {
   if(!array || !array.length) return 0
    
    let map = {}
    let count = 0
    array.forEach(num => {
        if(map[num]){
            map[num]++ 
        }
        else{
            map[num] = 1
            count++
        }
        
    })
    return count
}

// Test Cases
console.log(numUniques([])) // 0
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 4
console.log(numUniques([1])) // 1
