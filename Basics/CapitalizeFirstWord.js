//  Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(capitalizeWords(str));
}
function capitalizeWords(str) {
  // Your code goes here
  let formatted=''
  let stringarray = str.split(' ')
  stringarray.forEach((val)=>{
        formatted += `${val[0].toUpperCase()}${val.slice(1,val.length)} `
  })
  return formatted
}