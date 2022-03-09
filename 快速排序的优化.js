// 快排。。。。多路快排 (怎么写？？？)


// // ryf经典写法
// function jsQuickSort(array) {
//   if (array.length <= 1) {
//       return array;
//   }
//   const pivotIndex = Math.floor(array.length / 2);
//   const pivot = array.splice(pivotIndex, 1)[0];  //从数组中取出我们的"基准"元素
//   const left = [], right = [];
//   array.forEach(item => {
//       if (item < pivot) {  //left 存放比 pivot 小的元素
//           left.push(item); 
//       } else {  //right 存放大于或等于 pivot 的元素
//           right.push(item);
//       }
//   });
//   //至此，我们将数组分成了left和right两个部分
//   return jsQuickSort(left).concat(pivot, jsQuickSort(right));  //分而治之
// }

// const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
// console.log(jsQuickSort(arr));  //输出：[ 3, 10, 15, 25, 25, 41, 42, 54, 72, 98, 121 ]



// 快排
var quickSort_New = function(ary, left = 0, right = ary.length - 1) {

    if(left >= right) {
        return ary;
    }

    var i = left,
         j = right;
         base = ary[left]; // 基准

    while (i < j) {
        // 从右边起，寻找比基数小的数
        while (i<j && ary[j] >= base) {
            j--;
        }

        // 从左边起，寻找比基数大的数
        while (i<j && ary[i] <= base) {
            i++
        } 

        if (i<j) {
            var temp = ary[i];
            ary[i] = ary[j];
            ary[j] = temp;
        }
    }

    ary[left] = ary[i];
    ary[i] = base;

    quickSort_New(ary, left, i-1);
    quickSort_New(ary, i+1, right);

    return ary;
}

console.log(quickSort_New([46,877,986,1,454,34,8,15,84,6,64,56]))