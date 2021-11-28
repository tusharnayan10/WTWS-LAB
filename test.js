function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log("Sorted Array is = \n");
    console.log(arr);
}
function matAddition(mat1, mat2) {
    console.log("Sum of Matrix is = \n");
    var sum = mat1.map(function (num, idx) {
        return num + mat2[idx];
    });
    console.log(sum);
}
var arr = [2, 143, 2610, 1026, 2440, 280, 10, 47];
var mat1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var mat2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

bblSort(arr);
matAddition(mat1, mat2);