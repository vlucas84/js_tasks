function oneDimensionalArray(arr) {
var arrNew = [];
for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) != "object") 
        { arrNew.push(arr[i]) }
    else
        { return arrNew.concat(oneDimensionalArray(arr[i])) }
    };
return arrNew
};

var arr1 = [1, 2,3 ,[4,5,6 ,[7,8,[9,0]]]]; 
console.log(oneDimensionalArray(arr1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]