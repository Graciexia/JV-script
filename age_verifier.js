var age_verifier = function(age) {
  if (age < 21) {
    console.log("too young");
  } else {
    console.log("proceed");
  }
}

console.log("I am 18. May I come in?")
age_verifier(18);

console.log("Haha! :-p  I am 25. May I come in?")
age_verifier(25);
