const sortPeople = function(names, heights) {
    // Your code here
    return names.map((name,index)=>({name,height:heights[index]})).sort((a,b)=>b.height-a.height).map((item)=>item.name)
};
console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))