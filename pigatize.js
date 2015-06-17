var readline = require("readline");

var starts_with_vowel = function(text) {
  return ( text[0].search(/[a|e|i|o|u]/i) >= 0 );
}

var pigatize = function(text) {
  if ( starts_with_vowel(text) ) {
    return text + "way";
  } else {
    return text.slice(1) + text[0] + "ay";
  }
}

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Please enter a word and I will translate to pig latin: ");
rl.prompt();

rl.on('line', function(line) {
  if (line.length === 0) {
    process.exit(0);
  }
  console.log(pigatize(line));
  rl.prompt();
}).on('close', function() {
  process.exit(0);
});
