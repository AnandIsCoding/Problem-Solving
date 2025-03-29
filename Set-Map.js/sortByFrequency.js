function printFruitsByFrequency(fruits) {
    let map = new Map()
    for(let fruit of fruits){
        map.set(fruit,    (map.get(fruit)||0) +1 )
    }
    let arr = []
    for(let [key,value] of map){
        arr.push({key,value})
    }
    return arr.sort((a,b)=>b.value - a.value).map((item)=>item.key)
  }
  
console.log(printFruitsByFrequency(['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry']))  //[ 'cherry', 'banana', 'apple' ]