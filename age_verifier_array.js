var age_verifier = function (age_array) {
  age_array.forEach( function(age) {
    if (age < 21) {
      console.log("age " + age + ": not allowed");
    }
  });
}

age_verifier([18, 23, 14, 55, 104]);
