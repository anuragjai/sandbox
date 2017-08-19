var numArray = [140000, 104, 99];
for (i = 0; i >= 0 ; i++)
{
for (var i = 0; i < numArray.length; i++) {
    var target = numArray[i];
    for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
        numArray[j+1] = numArray[j];
    }
    numArray[j+1] = target
}
console.log(numArray);
}