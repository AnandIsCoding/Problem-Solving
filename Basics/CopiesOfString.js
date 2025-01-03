// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    var n = parseInt(readLine());
    console.log(string_copies(str,n));
}
function string_copies(str,n) 
{
  // Your code goes here
  let newStr = `" "`
  if(n <= 0){
    return ""
  }
  return str.repeat(n)
}