var maxArea = function(height) {
    let maxWater = -Infinity
    let start = 0 , end = height.length-1
    while(start < end){
        let min = Math.min(height[start],height[end])
        let area = min * (end-start)
        maxWater = Math.max(area,  maxWater  )
        if(height[start] < height[end]){
            start++
        }else{
            end--
        }
    }
    return maxWater
}