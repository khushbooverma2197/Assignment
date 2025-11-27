let count = 0;
let intervalId = setInterval(function () {
 console.log("Loading...");
 count++;
 if (count === 5) {
   clearInterval(intervalId);
   console.log("Loaded successfully");
 }
}, 1000);
