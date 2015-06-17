var readline = require("readline");

function changer(amount) {
  returned_coins = [];
  [25, 10, 5, 1].forEach(function(denomination){
    coins = parseInt(amount / denomination)
    for (i=0; i<coins; i++) {
      returned_coins.push(denomination);
    }
    amount -= coins * denomination;
  });
  return returned_coins;
};

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Please enter an amount to convert to coins: ");
rl.prompt();

rl.on('line', function(line) {
  if (line.length === 0) {
    process.exit(0);
  }
  console.log(changer(line));
  rl.prompt();
}).on('close', function() {
  process.exit(0);
});
