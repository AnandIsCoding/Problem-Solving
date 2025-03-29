// Do not remove nor make any changes in  main() function
function main() {
    var url = readLine();
    console.log(isValidURL(url));
}
function isValidURL(url) {
  // Your code goes here
  let regex = /(http|https|ftp):\/\/[^\s]+$/;
  return regex.test(url)
}