const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startCountdown(totalSeconds) {
  let remaining = totalSeconds;
  let stopped = false;

  const onKeyPress = (chunk) => {
    const key = chunk.toString();
    if (key.toLowerCase() === "s") {
      console.log("Countdown stopped by user.");
      cleanUp();
    }
  };

  function cleanUp() {
    if (stopped) return;
    stopped = true;
    clearInterval(timerId);
    process.stdin.setRawMode(false);
    process.stdin.removeListener("data", onKeyPress);
    rl.close();
  }

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", onKeyPress);

  const timerId = setInterval(() => {
    if (stopped) {
      return;
    }
    console.log("Remaining:", remaining, "seconds");
    remaining--;
    if (remaining < 0) {
      console.log("Countdown complete!");
      cleanUp();
    }
  }, 1000);
}

rl.question("Enter number of seconds to count down: ", (answer) => {
  const totalSeconds = Number(answer);
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    console.log("Please enter a positive number of seconds.");
    rl.close();
    return;
  }
  startCountdown(totalSeconds);
});
