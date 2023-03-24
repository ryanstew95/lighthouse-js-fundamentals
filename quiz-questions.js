var word = "bottles";
var count = 99;
while (count > 0) {
  if (count == 1){
    var word = "bottle"
  }
    console.log(count + " " + word + " of juice on the wall");
    console.log(count + " " + word + " of juice,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
      if (count == 1){
        var word = "bottle"
      }
        console.log(count + " " + word + " of juice on the wall.");
    } else {
      if (count < 1){
        var word = "bottles"
      }
        console.log("No more " + word + " of juice on the wall.");
    }
}