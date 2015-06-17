console.log("time = 0");
var start = new Date().getTime();
while (new Date().getTime() - start < 5000) { }
console.log("time = 5 seconds later");
