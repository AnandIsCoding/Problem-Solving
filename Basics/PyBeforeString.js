// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(addPy(str));
}
function addPy(str) {
  // Your code goes here
  if(str[0] == 'P' || str[0] == 'p'){
    return str
  }
  else if(str[0] !== 'P'  ||  str[0] !== 'p' ){
        return `Py${str}`
  }
}