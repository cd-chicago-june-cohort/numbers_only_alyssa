// Takes an array and returns a new array 
// with only the number data items from the 
// original array

function numbersOnly(arr){
    var numOnlyArray = [];
    for (var i=0; i<arr.length; i+=1){
        if (typeof arr[i] === "number"){
            numOnlyArray.push(arr[i])
        };
    };
    return numOnlyArray
}

// test numbersOnly function

var mixedArray = [5, true, "banana", -7, 9.1, "blerg"];
console.log("Expected = [5, -7, 9.1]");
console.log("Actual: " + numbersOnly(mixedArray));

// Takes an array and removes number data items

function noNumbersPlease(arr){
    for (var i=0; i<arr.length; i+=1){
        if (typeof arr[i] === "number"){
            delete arr[i];
            removeUndefined(arr);
            i -= 1; // since removeUndefined shifts everything left, we have to stop the incrementing on this loop
        };
    };
    return arr
};

function removeUndefined(arr){
    var idx=0;
    while (arr[idx] !=undefined){ //iterates until it finds an undefined index
        idx += 1;
    };
    for (idx; idx<arr.length-1; idx+=1){ //shifts array element 1 index to the left
        arr[idx]=arr[idx+1];
    };
    arr.pop(); //removes the last item and shortens the array
};

// test noNumbersPlease function

console.log ("Expected = [true, banana, blerg]");
console.log("Actual:  " + noNumbersPlease(mixedArray));