function timer(duration, onComplete) {
 setTimeout(() => {
   onComplete("Timer of " + duration + "ms is finished");
 }, duration);
}
// example use
timer(1000, (msg) => {
 console.log(msg);
});
