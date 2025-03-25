(function () {
  let start = 0;
  let intervalId = setInterval(() => {
    console.log(start);
    if (start >= 12) {
      clearInterval(intervalId);
    }
    start++;
  }, 1000);
})();
