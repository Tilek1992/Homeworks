function numbers (number1, number2) {
  if (number1 > number2){
    console.log("2")
  } else if (number2 > number1) {
    console.log("1")
  } else {
    console.log("=");
  }
}
numbers(5, 3);
// 2
function countChar (){
    var result = 0;
    for(var i = 0; i < this.length; i++)
        if (this[i] != undefined)
          result++;
    return result;
}
var count = countChar(1, "Tilek", "Toktokozhoev")
console.log(count);
